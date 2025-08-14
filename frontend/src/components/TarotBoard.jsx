import React, { useState, useEffect } from 'react';
import { getAllTarotCards } from '../utils/initializeCards';
import InterpretationPanel from './InterpretationPanel';

const TarotCard = ({ card, isSelected, isRevealed, onClick, position = null }) => {
  const [isFlipping, setIsFlipping] = useState(false);

  const handleClick = () => {
    if (isFlipping || isRevealed) return;
    setIsFlipping(true);
    
    // 애니메이션 후 onClick 호출
    setTimeout(() => {
      onClick(card);
      setIsFlipping(false);
    }, 300);
  };

  return (
    <div className={`relative cursor-pointer transition-all duration-300 hover:scale-105 ${
      isSelected ? 'transform -translate-y-2 ring-2 ring-gold-400' : ''
    }`}>
      {position && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-gold-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            {position}
          </span>
        </div>
      )}
      
      <div 
        className={`w-20 h-32 md:w-24 md:h-36 perspective-1000 ${isFlipping ? 'animate-card-flip' : ''}`}
        onClick={handleClick}
      >
        <div className={`relative w-full h-full transition-transform duration-300 transform-style-preserve-3d ${
          isRevealed || isFlipping ? 'rotate-y-180' : ''
        }`}>
          {/* 카드 뒷면 */}
          <div className="absolute inset-0 w-full h-full backface-hidden rounded-lg border-2 border-purple-300/30 bg-gradient-to-br from-purple-800 via-indigo-800 to-purple-900">
            <div className="flex flex-col items-center justify-center h-full text-purple-200">
              <div className="text-2xl mb-2">🔮</div>
              <div className="text-xs font-semibold tracking-wider">TAROT</div>
              <div className="w-8 h-8 border-2 border-purple-300/50 rounded-full flex items-center justify-center mt-2">
                <div className="w-3 h-3 bg-purple-400/60 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* 카드 앞면 */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-lg border-2 border-gold-300 bg-gradient-to-br from-white to-purple-50">
            <div className="flex flex-col items-center justify-between h-full p-2">
              <div className="text-xs font-bold text-purple-700">{card?.card_number}</div>
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg mb-1">🃏</div>
                  <div className="text-xs font-semibold text-purple-700 leading-tight">
                    {card?.name_kr}
                  </div>
                </div>
              </div>
              <div className="text-xs text-purple-600 opacity-70">
                {card?.arcana_type === 'major' ? 'Major' : card?.suit}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TarotBoard = () => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [showInterpretation, setShowInterpretation] = useState(false);
  const [loading, setLoading] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);

  const positions = ['과거', '현재', '미래'];

  useEffect(() => {
    loadCards();
  }, []);

  const loadCards = async () => {
    try {
      const tarotCards = await getAllTarotCards();
      if (tarotCards.length > 0) {
        // 카드를 랜덤하게 섞기
        const shuffledCards = [...tarotCards].sort(() => Math.random() - 0.5);
        setCards(shuffledCards);
      } else {
        console.warn('타로카드 데이터가 없습니다. 먼저 데이터를 초기화해주세요.');
      }
    } catch (error) {
      console.error('카드 로딩 오류:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = (card) => {
    if (selectedCards.length >= 3) return;
    
    // 이미 선택된 카드인지 확인
    if (selectedCards.find(selected => selected.id === card.id)) return;

    // 역방향 여부 랜덤 결정 (50% 확률)
    const isReversed = Math.random() < 0.5;
    const cardWithPosition = {
      ...card,
      isReversed,
      position: positions[selectedCards.length]
    };

    setSelectedCards(prev => [...prev, cardWithPosition]);
  };

  const handleStartGame = () => {
    setGameStarted(true);
    setSelectedCards([]);
    setShowInterpretation(false);
  };

  const handleShowInterpretation = () => {
    setShowInterpretation(true);
  };

  const handleNewReading = () => {
    setSelectedCards([]);
    setShowInterpretation(false);
    // 카드를 다시 섞기
    setCards(prev => [...prev].sort(() => Math.random() - 0.5));
  };

  const isCardSelected = (card) => {
    return selectedCards.some(selected => selected.id === card.id);
  };

  const isCardRevealed = (card) => {
    return isCardSelected(card);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
          <p className="text-purple-200">타로카드를 준비하는 중...</p>
        </div>
      </div>
    );
  }

  if (cards.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🃏</div>
        <h3 className="text-xl font-semibold text-white mb-4">타로카드 데이터가 없습니다</h3>
        <p className="text-purple-200/70 mb-6">
          먼저 설정 가이드에서 타로카드 데이터를 초기화해주세요.
        </p>
      </div>
    );
  }

  if (!gameStarted) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
            🔮 신비로운 타로카드 리딩
          </span>
        </h1>
        
        <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-purple-300/20 mb-8">
          <div className="text-6xl mb-4">🃏</div>
          <h2 className="text-2xl font-bold text-white mb-4">운명의 메시지를 받아보세요</h2>
          <p className="text-purple-200/80 mb-6">
            78장의 타로카드 중 3장을 선택하여<br/>
            과거, 현재, 미래의 메시지를 확인하세요
          </p>
          
          <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-300/10 text-left mb-6">
            <h3 className="text-lg font-semibold text-gold-300 mb-3">🌟 리딩 방법:</h3>
            <ol className="text-purple-200/80 space-y-2">
              <li>1. 마음을 가라앉히고 질문을 떠올리세요</li>
              <li>2. 직감에 따라 3장의 카드를 선택하세요</li>
              <li>3. 첫 번째: 과거의 영향</li>
              <li>4. 두 번째: 현재의 상황</li>
              <li>5. 세 번째: 미래의 전망</li>
            </ol>
          </div>
          
          <button
            onClick={handleStartGame}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            🔮 타로 리딩 시작하기
          </button>
        </div>
      </div>
    );
  }

  if (showInterpretation) {
    return (
      <InterpretationPanel 
        selectedCards={selectedCards}
        onNewReading={handleNewReading}
      />
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* 헤더 */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
            카드를 선택해주세요
          </span>
        </h1>
        <p className="text-purple-200/80">
          직감에 따라 3장의 카드를 선택하세요 ({selectedCards.length}/3)
        </p>
      </div>

      {/* 선택된 카드들 */}
      {selectedCards.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white text-center mb-4">선택된 카드</h2>
          <div className="flex justify-center gap-6">
            {selectedCards.map((card, index) => (
              <TarotCard
                key={card.id}
                card={card}
                isSelected={true}
                isRevealed={true}
                onClick={() => {}}
                position={positions[index]}
              />
            ))}
          </div>
        </div>
      )}

      {/* 해석 보기 버튼 */}
      {selectedCards.length === 3 && (
        <div className="text-center mb-8">
          <button
            onClick={handleShowInterpretation}
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse"
          >
            ✨ 카드 해석 보기 ✨
          </button>
        </div>
      )}

      {/* 카드 덱 */}
      <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-purple-300/20">
        <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-13 gap-3 max-h-96 overflow-y-auto">
          {cards.map((card) => (
            <TarotCard
              key={card.id}
              card={card}
              isSelected={isCardSelected(card)}
              isRevealed={isCardRevealed(card)}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>

      {/* 진행 상황 */}
      <div className="mt-6 text-center">
        <div className="flex justify-center space-x-4">
          {positions.map((position, index) => (
            <div
              key={position}
              className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 ${
                index < selectedCards.length
                  ? 'bg-gold-500/20 border-gold-400 text-gold-300'
                  : 'bg-purple-900/20 border-purple-400/30 text-purple-400'
              }`}
            >
              {position}
            </div>
          ))}
        </div>
        
        {selectedCards.length < 3 && (
          <p className="text-purple-300/70 mt-4">
            {positions[selectedCards.length]}에 해당하는 카드를 선택해주세요
          </p>
        )}
      </div>
    </div>
  );
};

export default TarotBoard;