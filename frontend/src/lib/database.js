import { createClient } from '@supabase/supabase-js'
import { neon } from '@neondatabase/serverless'

// 데이터베이스 타입 감지
const databaseType = process.env.REACT_APP_DATABASE_TYPE || 'auto'
const neonConnectionString = process.env.REACT_APP_NEON_DATABASE_URL || process.env.NETLIFY_DATABASE_URL
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

let db = null
let dbInfo = { type: null, connected: false }

// 자동 데이터베이스 감지 및 연결
if (databaseType === 'neon' || (databaseType === 'auto' && neonConnectionString)) {
  // Neon 데이터베이스 사용
  if (neonConnectionString) {
    db = neon(neonConnectionString)
    dbInfo = {
      type: 'Neon',
      connected: true,
      driver: 'neon-serverless'
    }
    console.log('✅ Neon 데이터베이스 연결 준비 완료')
  }
} else if (databaseType === 'supabase' || (databaseType === 'auto' && supabaseUrl && supabaseAnonKey)) {
  // Supabase 사용
  if (supabaseUrl && supabaseAnonKey) {
    db = createClient(supabaseUrl, supabaseAnonKey)
    dbInfo = {
      type: 'Supabase',
      connected: true,
      driver: 'supabase-js'
    }
    console.log('✅ Supabase 데이터베이스 연결 준비 완료')
  }
}

// 환경 변수 디버깅 정보
console.log('🔍 환경 변수 체크:')
console.log('- REACT_APP_DATABASE_TYPE:', process.env.REACT_APP_DATABASE_TYPE)
console.log('- REACT_APP_NEON_DATABASE_URL:', process.env.REACT_APP_NEON_DATABASE_URL ? '✅ 설정됨' : '❌ 없음')
console.log('- NETLIFY_DATABASE_URL:', process.env.NETLIFY_DATABASE_URL ? '✅ 설정됨' : '❌ 없음')
console.log('- REACT_APP_SUPABASE_URL:', process.env.REACT_APP_SUPABASE_URL ? '✅ 설정됨' : '❌ 없음')
console.log('- REACT_APP_SUPABASE_ANON_KEY:', process.env.REACT_APP_SUPABASE_ANON_KEY ? '✅ 설정됨' : '❌ 없음')

// 환경 변수 누락 시 경고
if (!db) {
  console.warn('⚠️ 데이터베이스 환경 변수가 설정되지 않았습니다.')
  console.warn('다음 중 하나를 설정하세요:')
  console.warn('- REACT_APP_NEON_DATABASE_URL (Neon)')
  console.warn('- NETLIFY_DATABASE_URL (Netlify + Neon 통합)')
  console.warn('- REACT_APP_SUPABASE_URL + REACT_APP_SUPABASE_ANON_KEY (Supabase)')
  
  dbInfo = {
    type: 'None',
    connected: false,
    driver: null,
    error: '환경 변수가 설정되지 않았습니다'
  }
}

export { db, dbInfo }

// Neon 데이터베이스 헬퍼 함수들
export const neonHelpers = {
  // 타로카드 데이터 조회
  async getAllTarotCards() {
    if (!db || dbInfo.driver !== 'neon-serverless') return []
    try {
      const result = await db`SELECT * FROM tarot_cards ORDER BY card_number`
      return result
    } catch (error) {
      console.error('Neon: 타로카드 조회 오류:', error)
      return []
    }
  },

  // 타로카드 데이터 존재 확인
  async checkTarotCardsExist() {
    if (!db || dbInfo.driver !== 'neon-serverless') {
      return { exists: false, count: 0 }
    }
    try {
      const result = await db`SELECT COUNT(*) as count FROM tarot_cards`
      const count = parseInt(result[0]?.count || 0)
      return {
        exists: count > 0,
        count: count
      }
    } catch (error) {
      console.error('Neon: 카드 존재 확인 오류:', error)
      return { exists: false, count: 0 }
    }
  },

  // 타로카드 데이터 초기화
  async initializeTarotCards(tarotCardsData) {
    if (!db || dbInfo.driver !== 'neon-serverless') {
      return { success: false, message: 'Neon 데이터베이스가 연결되지 않았습니다.' }
    }

    try {
      console.log('🔮 Neon: 타로카드 데이터 초기화 시작...')
      
      // 기존 데이터 확인
      const existingCount = await db`SELECT COUNT(*) as count FROM tarot_cards`
      const count = parseInt(existingCount[0]?.count || 0)

      if (count > 0) {
        const shouldReset = window.confirm(
          `이미 ${count}장의 카드 데이터가 존재합니다.\n기존 데이터를 모두 삭제하고 다시 초기화하시겠습니까?`
        )
        
        if (!shouldReset) {
          return { success: false, message: '사용자가 초기화를 취소했습니다.' }
        }

        // 기존 데이터 삭제
        await db`DELETE FROM tarot_cards`
        console.log('🗑️ Neon: 기존 데이터 삭제 완료')
      }

      // 새 데이터 삽입 (배치 처리)
      let insertedCount = 0
      const batchSize = 10

      for (let i = 0; i < tarotCardsData.length; i += batchSize) {
        const batch = tarotCardsData.slice(i, i + batchSize)
        
        // Neon은 배열을 직접 지원하지 않으므로 개별 삽입
        for (const card of batch) {
          await db`
            INSERT INTO tarot_cards (
              card_number, name_en, name_kr, arcana_type, suit, 
              meaning_upright, meaning_reversed, keywords
            ) VALUES (
              ${card.card_number}, ${card.name_en}, ${card.name_kr},
              ${card.arcana_type}, ${card.suit || null},
              ${card.meaning_upright}, ${card.meaning_reversed},
              ${JSON.stringify(card.keywords || [])}
            )
          `
          insertedCount++
        }

        console.log(`📊 Neon: 진행률 ${insertedCount}/${tarotCardsData.length} (${Math.round(insertedCount/tarotCardsData.length*100)}%)`)
      }

      console.log('✅ Neon: 타로카드 데이터 초기화 완료!')
      return {
        success: true,
        message: `✨ ${insertedCount}장의 타로카드 데이터가 Neon에 성공적으로 초기화되었습니다!`,
        count: insertedCount
      }

    } catch (error) {
      console.error('❌ Neon: 데이터 초기화 오류:', error)
      return {
        success: false,
        message: `❌ Neon 초기화 실패: ${error.message}`
      }
    }
  },

  // 리딩 저장
  async saveReading(readingData) {
    if (!db || dbInfo.driver !== 'neon-serverless') {
      throw new Error('Neon 데이터베이스가 연결되지 않았습니다.')
    }

    try {
      const result = await db`
        INSERT INTO readings (user_id, session_id, selected_cards, question, interpretation)
        VALUES (
          ${readingData.user_id || null},
          ${readingData.session_id},
          ${JSON.stringify(readingData.selected_cards)},
          ${readingData.question || null},
          ${readingData.interpretation || null}
        )
        RETURNING *
      `
      return result[0]
    } catch (error) {
      console.error('Neon: 리딩 저장 오류:', error)
      throw error
    }
  }
}

// Supabase 호환성을 위한 통합 인터페이스
export const supabase = dbInfo.driver === 'supabase-js' ? db : null