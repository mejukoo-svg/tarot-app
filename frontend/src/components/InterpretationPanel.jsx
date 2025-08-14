import React from 'react';

const InterpretationPanel = ({ selectedCards, onNewReading }) => {
  const positions = ['과거', '현재', '미래'];
  
  const getPositionDescription = (position) => {
    switch (position) {
      case '과거':
        return '당신의 과거 상황과 현재에 영향을 미치는 요소들을 나타냅니다';
      case '현재':
        return '현재 당신이 직면한 상황과 주변의 에너지를 보여줍니다';
      case '미래':
        return '앞으로의 전망과 가능성, 나아가야 할 방향을 제시합니다';
      default:
        return '';
    }
  };

  const generateOverallInterpretation = (cards) => {
    if (!cards || cards.length !== 3) return '';
    
    const [pastCard, presentCard, futureCard] = cards;
    
    return `
이번 리딩에서 과거의 "${pastCard.name_kr}"가 현재의 "${presentCard.name_kr}"으로 연결되어 미래의 "${futureCard.name_kr}"로 이어지는 흐름을 보여줍니다.

과거의 ${pastCard.isReversed ? '역방향 ' : ''}${pastCard.name_kr}는 ${pastCard.isReversed ? pastCard.meaning_reversed : pastCard.meaning_upright}

현재 상황을 나타내는 ${presentCard.isReversed ? '역방향 ' : ''}${presentCard.name_kr}는 ${presentCard.isReversed ? presentCard.meaning_reversed : presentCard.meaning_upright}

미래를 암시하는 ${futureCard.isReversed ? '역방향 ' : ''}${futureCard.name_kr}는 ${futureCard.isReversed ? futureCard.meaning_reversed : futureCard.meaning_upright}

종합적으로 볼 때, 과거의 경험이 현재의 상황을 만들어냈으며, 이를 바탕으로 미래에 대한 통찰을 얻을 수 있습니다. 각 카드가 전하는 메시지를 마음에 새기고, 지혜롭게 앞으로 나아가시기 바랍니다.
    `;
  };

  if (!selectedCards || selectedCards.length !== 3) {
    return (
      <div className="text-center py-12">
        <div className="text-red-400 text-xl">선택된 카드가 부족합니다</div>
        <button
          onClick={onNewReading}
          className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg"
        >
          새로운 리딩 시작
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* 헤더 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-gold-300 via-yellow-300 to-gold-300 bg-clip-text text-transparent">
            🔮 타로카드 해석
          </span>
        </h1>
        <p className="text-purple-200/80 text-lg">
          선택하신 3장의 카드가 전하는 신비로운 메시지입니다
        </p>
      </div>

      {/* 선택된 카드들 미리보기 */}
      <div className="mb-12">
        <div className="flex justify-center gap-8">
          {selectedCards.map((card, index) => (
            <div key={card.id} className="text-center">
              <div className="mb-3">
                <span className="bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {positions[index]}
                </span>
              </div>
              
              {/* 카드 미니버전 */}
              <div className="w-24 h-36 rounded-lg border-2 border-gold-300 bg-gradient-to-br from-white to-purple-50 relative mx-auto mb-2">
                {card.isReversed && (
                  <div className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1 rounded">
                    R
                  </div>
                )}
                <div className="flex flex-col items-center justify-between h-full p-2">
                  <div className="text-xs font-bold text-purple-700">{card.card_number}</div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg mb-1">🃏</div>
                      <div className="text-xs font-semibold text-purple-700 leading-tight">
                        {card.name_kr}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-purple-600 opacity-70">
                    {card.arcana_type === 'major' ? 'Major' : card.suit}
                  </div>
                </div>
              </div>
              
              <div className="text-sm text-purple-200/90 font-medium">
                {card.name_kr}
                {card.isReversed && (
                  <span className="block text-red-300 text-xs">(역방향)</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 개별 카드 해석 */}
      <div className="space-y-8 mb-12">
        <h2 className="text-3xl font-bold text-center text-white mb-8">개별 카드 해석</h2>
        
        {selectedCards.map((card, index) => {
          const position = positions[index];
          const meaning = card.isReversed ? card.meaning_reversed : card.meaning_upright;
          
          return (
            <div 
              key={card.id} 
              className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-purple-300/20"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* 포지션 및 카드 정보 */}
                <div className="md:w-1/3">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-gold-300 mb-2">
                      {position}
                    </h3>
                    <h4 className="text-xl text-white mb-2">
                      {card.name_kr}
                      {card.isReversed && (
                        <span className="block text-red-400 text-sm">(역방향)</span>
                      )}
                    </h4>
                    <p className="text-purple-200/70 text-sm">
                      {getPositionDescription(position)}
                    </p>
                  </div>
                </div>

                {/* 카드 해석 */}
                <div className="md:w-2/3">
                  <div className="bg-purple-900/30 rounded-lg p-6 border border-purple-300/10">
                    <h4 className="text-lg font-semibold text-gold-300 mb-4">
                      {card.isReversed ? '역방향 의미' : '정방향 의미'}
                    </h4>
                    <p className="text-white leading-relaxed text-base mb-4">
                      {meaning}
                    </p>
                    
                    {/* 키워드 */}
                    {card.keywords && (
                      <div>
                        <h5 className="text-sm font-semibold text-purple-300 mb-2">핵심 키워드</h5>
                        <div className="flex flex-wrap gap-2">
                          {card.keywords.map((keyword, idx) => (
                            <span
                              key={idx}
                              className="bg-gradient-to-r from-purple-500/30 to-indigo-500/30 text-purple-200 px-3 py-1 rounded-full text-sm border border-purple-300/20"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 종합 해석 */}
      <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 backdrop-blur-sm rounded-xl p-8 border border-gold-300/30 mb-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gold-300 mb-2">
            ✨ 종합 해석 ✨
          </h2>
          <p className="text-purple-200/80">
            과거-현재-미래로 이어지는 전체적인 메시지
          </p>
        </div>
        
        <div className="bg-black/30 rounded-lg p-6 border border-purple-300/10">
          <div className="text-white leading-relaxed text-base whitespace-pre-line">
            {generateOverallInterpretation(selectedCards)}
          </div>
        </div>
      </div>

      {/* 액션 버튼들 */}
      <div className="text-center space-y-4">
        <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-300/20 max-w-2xl mx-auto mb-6">
          <p className="text-purple-200/80 text-sm leading-relaxed">
            💫 타로카드는 현재 상황에 대한 통찰과 가능성을 제시합니다. 
            최종 결정은 항상 당신의 자유 의지에 달려 있습니다. 
            카드의 메시지를 참고하여 지혜로운 선택을 하시기 바랍니다.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onNewReading}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            🔮 새로운 리딩 시작
          </button>
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            📜 위로 스크롤
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterpretationPanel;