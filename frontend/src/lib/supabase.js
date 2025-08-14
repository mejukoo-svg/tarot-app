import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

// 환경 변수 검증
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase 환경 변수가 설정되지 않았습니다. 데모 모드로 실행됩니다.')
}

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// 타로 카드 데이터 초기화 함수
export async function initializeTarotCards(tarotCardsData) {
  try {
    // 기존 데이터 확인
    const { data: existingCards, error: checkError } = await supabase
      .from('tarot_cards')
      .select('id')
      .limit(1)

    if (checkError) throw checkError

    // 이미 데이터가 있으면 초기화하지 않음
    if (existingCards && existingCards.length > 0) {
      console.log('타로카드 데이터가 이미 존재합니다.')
      return
    }

    // 카드 데이터 삽입
    const { error } = await supabase
      .from('tarot_cards')
      .insert(tarotCardsData)

    if (error) throw error
    console.log('타로카드 데이터 초기화 완료')
  } catch (error) {
    console.error('타로카드 데이터 초기화 오류:', error)
  }
}

// 모든 타로카드 가져오기
export async function getAllTarotCards() {
  try {
    const { data, error } = await supabase
      .from('tarot_cards')
      .select('*')
      .order('card_number')

    if (error) throw error
    return data
  } catch (error) {
    console.error('타로카드 데이터 가져오기 오류:', error)
    return []
  }
}

// 리딩 저장
export async function saveReading(readingData) {
  try {
    const { data, error } = await supabase
      .from('readings')
      .insert(readingData)
      .select()

    if (error) throw error
    return data[0]
  } catch (error) {
    console.error('리딩 저장 오류:', error)
    throw error
  }
}

// 사용자의 리딩 기록 가져오기
export async function getUserReadings(userId) {
  try {
    const { data, error } = await supabase
      .from('readings')
      .select('*')
      .eq('user_id', userId)
      .order('reading_date', { ascending: false })

    if (error) throw error
    return data
  } catch (error) {
    console.error('리딩 기록 가져오기 오류:', error)
    return []
  }
}

// 인증 관련 함수
export async function signInWithEmail(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  return { data, error }
}

export async function signUpWithEmail(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  })
  return { data, error }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export async function getCurrentUser() {
  const { data: { user }, error } = await supabase.auth.getUser()
  return { user, error }
}