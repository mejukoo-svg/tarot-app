import React, { useState } from 'react';

const TarotCard = ({ card, isRevealed = false, isSelected = false, onClick, position = null, isReversed = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick(card);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      {position && (
        <div className="position-label">
          {position}
        </div>
      )}
      
      <div
        className={`tarot-card ${isSelected ? 'selected' : ''} ${isRevealed ? 'card-flip' : ''}`}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full h-full">
          {!isRevealed ? (
            // 카드 뒷면
            <div className="card-back">
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="text-2xl">🔮</div>
                <div className="text-xs text-purple-200/70 font-semibold tracking-wider">
                  TAROT
                </div>
                <div className="w-8 h-8 border-2 border-purple-300/50 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-purple-400/60 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ) : (
            // 카드 앞면 (공개된 상태)
            <div className={`card-front ${isReversed ? 'transform rotate-180' : ''}`}>
              <div className="flex flex-col items-center justify-between h-full">
                {/* 카드 번호 */}
                <div className="text-xs font-bold text-purple-700">
                  {card.card_number}
                </div>
                
                {/* 카드 이미지 영역 */}
                <div className="flex-1 flex items-center justify-center">
                  {card.image_url ? (
                    <img
                      src={card.image_url}
                      alt={card.name_kr}
                      className="w-full h-full object-cover rounded"
                    />
                  ) : (
                    // 플레이스홀더 이미지
                    <div className="w-full h-full bg-gradient-to-br from-purple-200 to-indigo-200 rounded flex flex-col items-center justify-center text-purple-700">
                      <div className="text-lg mb-1">🃏</div>
                      <div className="text-xs font-semibold text-center px-1">
                        {card.name_kr}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* 카드 이름 */}
                <div className="text-xs font-semibold text-purple-700 text-center px-1">
                  {card.name_kr}
                </div>
                
                {/* 역방향 표시 */}
                {isReversed && (
                  <div className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1 rounded">
                    R
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* 호버 효과 */}
          {isHovered && !isRevealed && (
            <div className="absolute inset-0 bg-purple-400/20 rounded-lg pointer-events-none"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TarotCard;