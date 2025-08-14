import React from 'react';
import TarotCard from './TarotCard';

const SelectedCards = ({ selectedCards, showInterpretation = false }) => {
  const positions = ['과거', '현재', '미래'];
  
  const getPositionName = (index) => {
    return positions[index] || `위치 ${index + 1}`;
  };

  return (
    <div className="selected-cards-container">
      {[0, 1, 2].map((index) => {
        const selectedCard = selectedCards[index];
        
        return (
          <div key={index} className="selected-card-slot">
            {selectedCard ? (
              <TarotCard
                card={selectedCard}
                isRevealed={showInterpretation}
                position={getPositionName(index)}
                isReversed={selectedCard.is_reversed}
              />
            ) : (
              <div className="flex flex-col items-center space-y-2">
                <div className="position-label">
                  {getPositionName(index)}
                </div>
                <div className="card-placeholder">
                  <span>카드 선택</span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SelectedCards;