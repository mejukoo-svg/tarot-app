import React from 'react';
import TarotCard from './TarotCard';

const CardDeck = ({ cards, selectedCards, onCardClick, maxSelection = 3 }) => {
  const isCardSelected = (card) => {
    return selectedCards.some(selected => selected.card_number === card.card_number);
  };

  const canSelectMore = selectedCards.length < maxSelection;

  const handleCardClick = (card) => {
    const isSelected = isCardSelected(card);
    
    if (isSelected) {
      // 이미 선택된 카드를 클릭하면 선택 해제
      onCardClick(card, 'deselect');
    } else if (canSelectMore) {
      // 새로운 카드 선택
      onCardClick(card, 'select');
    }
  };

  return (
    <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-purple-300/20">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">카드를 선택하세요</h2>
        <p className="text-purple-200/70">
          직감에 따라 3장의 카드를 선택해주세요 ({selectedCards.length}/3)
        </p>
      </div>
      
      <div className="card-grid">
        {cards.map((card) => (
          <TarotCard
            key={card.card_number}
            card={card}
            isSelected={isCardSelected(card)}
            onClick={handleCardClick}
          />
        ))}
      </div>
      
      {!canSelectMore && (
        <div className="text-center mt-4">
          <p className="text-gold-300 font-semibold">
            3장의 카드를 모두 선택했습니다. 해석을 보려면 아래 버튼을 클릭하세요.
          </p>
        </div>
      )}
    </div>
  );
};

export default CardDeck;