import React, { useState, useEffect } from 'react';
import { getUserReadings, getCurrentUser } from '../lib/supabase';
import { getCardById } from '../data/tarotCards';

const History = () => {
  const [readings, setReadings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUserReadings = async () => {
      try {
        const { user } = await getCurrentUser();
        setUser(user);
        
        if (user) {
          const userReadings = await getUserReadings(user.id);
          setReadings(userReadings);
        }
      } catch (error) {
        console.error('리딩 기록 로드 오류:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUserReadings();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">리딩 기록</h2>
          <p className="text-purple-200/70">로그인 후 리딩 기록을 확인할 수 있습니다.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto"></div>
          <p className="text-purple-200/70 mt-4">리딩 기록을 불러오는 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">🔮 나의 리딩 기록</h2>
        <p className="text-purple-200/70">과거에 받았던 타로카드 메시지들을 다시 확인해보세요</p>
      </div>

      {readings.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🃏</div>
          <h3 className="text-xl font-semibold text-white mb-2">아직 리딩 기록이 없습니다</h3>
          <p className="text-purple-200/70 mb-6">첫 번째 타로카드 리딩을 받아보세요!</p>
          <button
            onClick={() => window.location.href = '/'}
            className="mystical-button"
          >
            리딩 받으러 가기
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {readings.map((reading) => (
            <div
              key={reading.id}
              className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-purple-300/20"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    타로카드 리딩
                  </h3>
                  <p className="text-purple-200/70 text-sm">
                    {formatDate(reading.reading_date)}
                  </p>
                </div>
              </div>

              {/* 질문 표시 */}
              {reading.question && (
                <div className="mb-4 p-3 bg-purple-900/20 rounded-lg border border-purple-300/10">
                  <h4 className="text-gold-300 font-semibold text-sm mb-1">질문</h4>
                  <p className="text-white italic">"{reading.question}"</p>
                </div>
              )}

              {/* 선택된 카드들 */}
              <div className="mb-4">
                <h4 className="text-purple-200 font-semibold text-sm mb-3">선택된 카드</h4>
                <div className="flex space-x-4 overflow-x-auto pb-2">
                  {reading.cards_selected?.map((cardData, index) => {
                    const card = getCardById(cardData.card_id);
                    if (!card) return null;
                    
                    return (
                      <div key={index} className="flex-shrink-0 text-center">
                        <div className="w-16 h-24 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg p-2 mb-2 border border-purple-300/30">
                          <div className="text-xs text-white font-semibold mb-1">
                            {cardData.position}
                          </div>
                          <div className="text-xs text-purple-200">
                            {card.name_kr}
                            {cardData.is_reversed && (
                              <span className="block text-red-300">(역방향)</span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 해석 요약 */}
              {reading.interpretation && (
                <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-300/10">
                  <h4 className="text-gold-300 font-semibold text-sm mb-2">해석</h4>
                  <p className="text-white text-sm leading-relaxed line-clamp-3">
                    {reading.interpretation.substring(0, 200)}...
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default History;