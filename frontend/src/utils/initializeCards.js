import { supabase } from '../lib/supabase';
import { tarotCardsData } from '../data/tarotCards';

/**
 * Supabase에 78장의 타로카드 데이터를 삽입하는 함수
 * @returns {Promise<{success: boolean, message: string, count?: number}>}
 */
export async function initializeTarotCards() {
  try {
    console.log('🔮 타로카드 데이터 초기화 시작...');
    
    // 1. 기존 데이터 확인
    const { data: existingCards, error: checkError } = await supabase
      .from('tarot_cards')
      .select('id, card_number')
      .order('card_number');

    if (checkError && !checkError.message.includes('relation "tarot_cards" does not exist')) {
      throw new Error(`데이터 확인 오류: ${checkError.message}`);
    }

    // 2. 기존 데이터가 있으면 사용자에게 확인
    if (existingCards && existingCards.length > 0) {
      const shouldReset = window.confirm(
        `이미 ${existingCards.length}장의 카드 데이터가 존재합니다.\n기존 데이터를 모두 삭제하고 다시 초기화하시겠습니까?`
      );
      
      if (!shouldReset) {
        return {
          success: false,
          message: '사용자가 초기화를 취소했습니다.'
        };
      }

      // 기존 데이터 삭제
      console.log('🗑️ 기존 카드 데이터 삭제 중...');
      const { error: deleteError } = await supabase
        .from('tarot_cards')
        .delete()
        .neq('id', 0); // 모든 데이터 삭제

      if (deleteError) {
        throw new Error(`기존 데이터 삭제 오류: ${deleteError.message}`);
      }
      console.log('✅ 기존 데이터 삭제 완료');
    }

    // 3. 새로운 카드 데이터 삽입
    console.log('📥 새로운 타로카드 데이터 삽입 중...');
    
    // 배치 단위로 데이터 삽입 (한 번에 너무 많이 삽입하면 오류가 날 수 있음)
    const batchSize = 10;
    let insertedCount = 0;

    for (let i = 0; i < tarotCardsData.length; i += batchSize) {
      const batch = tarotCardsData.slice(i, i + batchSize);
      
      const { data, error } = await supabase
        .from('tarot_cards')
        .insert(batch)
        .select('id');

      if (error) {
        throw new Error(`배치 ${Math.floor(i/batchSize) + 1} 삽입 오류: ${error.message}`);
      }

      insertedCount += data.length;
      console.log(`📊 진행률: ${insertedCount}/${tarotCardsData.length} (${Math.round(insertedCount/tarotCardsData.length*100)}%)`);
    }

    // 4. 삽입 결과 확인
    // eslint-disable-next-line no-unused-vars
    const { data: _finalCheck, error: finalError } = await supabase
      .from('tarot_cards')
      .select('count');

    if (finalError) {
      console.warn('최종 확인 중 오류:', finalError);
    }

    console.log('✅ 타로카드 데이터 초기화 완료!');
    return {
      success: true,
      message: `✨ ${insertedCount}장의 타로카드 데이터가 성공적으로 초기화되었습니다!`,
      count: insertedCount
    };

  } catch (error) {
    console.error('❌ 타로카드 데이터 초기화 오류:', error);
    return {
      success: false,
      message: `❌ 초기화 실패: ${error.message}`
    };
  }
}

/**
 * 타로카드 데이터 존재 여부 확인
 * @returns {Promise<{exists: boolean, count: number}>}
 */
export async function checkTarotCardsExist() {
  try {
    // eslint-disable-next-line no-unused-vars
    const { data: _data, error } = await supabase
      .from('tarot_cards')
      .select('id')
      .limit(1);

    if (error) {
      if (error.message.includes('relation "tarot_cards" does not exist')) {
        return { exists: false, count: 0 };
      }
      throw error;
    }

    const { count } = await supabase
      .from('tarot_cards')
      .select('*', { count: 'exact', head: true });

    return {
      exists: count > 0,
      count: count || 0
    };
  } catch (error) {
    console.error('카드 데이터 확인 오류:', error);
    return { exists: false, count: 0 };
  }
}

/**
 * 특정 카드 데이터 조회
 * @param {number} cardNumber - 카드 번호
 * @returns {Promise<Object|null>}
 */
export async function getCardByNumber(cardNumber) {
  try {
    const { data, error } = await supabase
      .from('tarot_cards')
      .select('*')
      .eq('card_number', cardNumber)
      .single();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error(`카드 ${cardNumber} 조회 오류:`, error);
    return null;
  }
}

/**
 * 모든 타로카드 데이터 조회
 * @returns {Promise<Array>}
 */
export async function getAllTarotCards() {
  try {
    const { data, error } = await supabase
      .from('tarot_cards')
      .select('*')
      .order('card_number');

    if (error) {
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('전체 카드 조회 오류:', error);
    return [];
  }
}