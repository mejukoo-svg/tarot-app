import React, { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import { initializeTarotCards, checkTarotCardsExist } from './utils/initializeCards';
import TarotBoard from './components/TarotBoard';

// 기본 헤더 컴포넌트
const SimpleHeader = () => (
  <header className="w-full bg-black/20 backdrop-blur-sm border-b border-purple-300/20 px-6 py-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">🔮</span>
        </div>
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
            타로카드 리딩
          </h1>
          <p className="text-purple-200/70 text-sm">신비로운 운명의 메시지</p>
        </div>
      </div>
    </div>
  </header>
);

// 기본 타로 보드 컴포넌트
const SimpleTarotBoard = ({ supabaseStatus, connectionMessage, cardsExist, cardsCount, onInitializeCards, isInitializing, onViewChange }) => (
  <div className="max-w-7xl mx-auto px-4 py-8">
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
          신비로운 타로카드 리딩
        </span>
      </h1>
      <p className="text-xl text-purple-200/80 mb-6">
        과거, 현재, 미래를 아우르는 운명의 메시지를 확인해보세요
      </p>

      {/* Supabase 연결 상태 표시 */}
      <div className={`mb-6 p-4 rounded-lg max-w-md mx-auto ${
        supabaseStatus === 'connected' 
          ? 'bg-green-900/30 border border-green-500/30' 
          : supabaseStatus === 'error'
          ? 'bg-red-900/30 border border-red-500/30'
          : 'bg-yellow-900/30 border border-yellow-500/30'
      }`}>
        <p className={`font-semibold ${
          supabaseStatus === 'connected' 
            ? 'text-green-300' 
            : supabaseStatus === 'error'
            ? 'text-red-300'
            : 'text-yellow-300'
        }`}>
          {connectionMessage}
        </p>
      </div>
      
      <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-purple-300/20 max-w-2xl mx-auto">
        <div className="text-6xl mb-4">🔮</div>
        <h2 className="text-2xl font-bold text-white mb-4">환영합니다!</h2>
        <p className="text-purple-200/80 mb-6">
          타로카드 웹서비스가 성공적으로 실행되었습니다.<br/>
          {supabaseStatus === 'connected' 
            ? '모든 기능을 사용할 수 있습니다!' 
            : 'Supabase 설정을 완료하면 모든 기능을 사용할 수 있습니다.'
          }
        </p>
        
        {supabaseStatus === 'connected' ? (
          <div className="bg-green-900/30 rounded-lg p-4 border border-green-300/10 text-left">
            <h3 className="text-lg font-semibold text-green-300 mb-3">🎉 준비 완료!</h3>
            <p className="text-green-200/80 text-sm">
              이제 완전한 타로카드 리딩 기능을 사용할 수 있습니다!<br/>
              App.jsx를 원래 버전으로 복원하여 모든 기능을 활성화하세요.
            </p>
          </div>
        ) : (
          <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-300/10 text-left">
            <h3 className="text-lg font-semibold text-gold-300 mb-3">🚀 다음 단계:</h3>
            <ol className="text-purple-200/80 space-y-2 text-sm">
              <li>1. Supabase SQL Editor에서 데이터베이스 스키마 실행</li>
              <li>2. 타로카드 데이터 초기화</li>
              <li>3. 앱 재시작 후 연결 확인</li>
            </ol>
          </div>
        )}
        
        <div className="mt-6 space-y-4">
          {supabaseStatus === 'connected' && !cardsExist && (
            <button 
              onClick={onInitializeCards}
              disabled={isInitializing}
              className={`w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                isInitializing ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isInitializing ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  카드 데이터 초기화 중...
                </div>
              ) : (
                '🃏 78장 타로카드 데이터 초기화하기'
              )}
            </button>
          )}
          
          <button 
            onClick={() => cardsExist ? onViewChange('tarot') : onViewChange('setup')}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            🔮 타로 리딩 시작
          </button>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [supabaseStatus, setSupabaseStatus] = useState('connecting'); // 'connecting', 'connected', 'error'
  const [connectionMessage, setConnectionMessage] = useState('Supabase 연결 확인 중...');
  const [cardsExist, setCardsExist] = useState(false);
  const [cardsCount, setCardsCount] = useState(0);
  const [isInitializing, setIsInitializing] = useState(false);

  useEffect(() => {
    // Supabase 연결 테스트 및 카드 데이터 확인
    const testSupabaseConnection = async () => {
      try {
        // 기본 연결 테스트
        const { error: connectionError } = await supabase
          .from('tarot_cards')
          .select('count')
          .limit(1);
        
        if (connectionError && !connectionError.message.includes('relation "tarot_cards" does not exist')) {
          throw connectionError;
        }
        
        // 카드 데이터 존재 여부 확인
        const cardStatus = await checkTarotCardsExist();
        setCardsExist(cardStatus.exists);
        setCardsCount(cardStatus.count);
        
        setSupabaseStatus('connected');
        if (cardStatus.exists) {
          setConnectionMessage(`✨ Supabase 연결 성공! (${cardStatus.count}장의 카드 데이터 존재)`);
        } else {
          setConnectionMessage('✨ Supabase 연결 성공! (카드 데이터 초기화 필요)');
        }
        console.log('✅ Supabase 연결 성공, 카드 데이터:', cardStatus);
      } catch (error) {
        setSupabaseStatus('error');
        setConnectionMessage(`❌ Supabase 연결 실패: ${error.message}`);
        console.error('❌ Supabase 연결 오류:', error);
      }
    };

    testSupabaseConnection();
  }, []);

  // 타로카드 데이터 초기화 함수
  const handleInitializeCards = async () => {
    if (isInitializing) return;
    
    setIsInitializing(true);
    try {
      const result = await initializeTarotCards();
      
      if (result.success) {
        // 초기화 성공 시 상태 업데이트
        setCardsExist(true);
        setCardsCount(result.count || 78);
        setConnectionMessage(`✨ Supabase 연결 성공! (${result.count || 78}장의 카드 데이터 존재)`);
        alert(result.message);
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert(`초기화 중 오류 발생: ${error.message}`);
    } finally {
      setIsInitializing(false);
    }
  };

  return (
    <div className="min-h-screen">
      <SimpleHeader />
      
      {/* 네비게이션 */}
      <nav className="bg-black/10 backdrop-blur-sm border-b border-purple-300/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8">
            <button
              onClick={() => setCurrentView('home')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                currentView === 'home'
                  ? 'border-purple-400 text-purple-300'
                  : 'border-transparent text-purple-200/70 hover:text-purple-200'
              }`}
            >
              🏠 홈
            </button>
            <button
              onClick={() => setCurrentView('tarot')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                currentView === 'tarot'
                  ? 'border-purple-400 text-purple-300'
                  : 'border-transparent text-purple-200/70 hover:text-purple-200'
              }`}
            >
              🔮 타로카드 리딩
            </button>
            <button
              onClick={() => setCurrentView('setup')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                currentView === 'setup'
                  ? 'border-purple-400 text-purple-300'
                  : 'border-transparent text-purple-200/70 hover:text-purple-200'
              }`}
            >
              ⚙️ 설정 가이드
            </button>
          </div>
        </div>
      </nav>

      {/* 메인 콘텐츠 */}
      <main className="pb-12">
        {currentView === 'home' && (
          <SimpleTarotBoard 
            supabaseStatus={supabaseStatus} 
            connectionMessage={connectionMessage}
            cardsExist={cardsExist}
            cardsCount={cardsCount}
            onInitializeCards={handleInitializeCards}
            isInitializing={isInitializing}
            onViewChange={setCurrentView}
          />
        )}
        {currentView === 'tarot' && (
          cardsExist ? (
            <TarotBoard />
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🃏</div>
              <h3 className="text-xl font-semibold text-white mb-4">타로카드 데이터가 없습니다</h3>
              <p className="text-purple-200/70 mb-6">
                먼저 설정 가이드에서 타로카드 데이터를 초기화해주세요.
              </p>
              <button
                onClick={() => setCurrentView('setup')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg"
              >
                설정 가이드로 이동
              </button>
            </div>
          )
        )}
        {currentView === 'setup' && (
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-purple-300/20">
              <h2 className="text-3xl font-bold text-white mb-6">⚙️ 설정 가이드</h2>
              
              <div className="space-y-6">
                <div className="bg-purple-900/30 rounded-lg p-6 border border-purple-300/10">
                  <h3 className="text-xl font-semibold text-gold-300 mb-4">1. Supabase 프로젝트 설정</h3>
                  <ol className="text-purple-200/80 space-y-2">
                    <li>• <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline">Supabase</a>에서 새 프로젝트 생성</li>
                    <li>• SQL Editor에서 <code className="bg-black/30 px-2 py-1 rounded">supabase/migrations/001_schema.sql</code> 실행</li>
                    <li>• Project Settings → API에서 URL과 anon key 복사</li>
                  </ol>
                </div>
                
                <div className="bg-purple-900/30 rounded-lg p-6 border border-purple-300/10">
                  <h3 className="text-xl font-semibold text-gold-300 mb-4">2. 환경변수 설정</h3>
                  <p className="text-purple-200/80 mb-3">.env.local 파일을 수정하세요:</p>
                  <pre className="bg-black/50 p-4 rounded text-green-300 text-sm overflow-x-auto">
{`REACT_APP_SUPABASE_URL=your_supabase_project_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key`}
                  </pre>
                </div>
                
                <div className="bg-purple-900/30 rounded-lg p-6 border border-purple-300/10">
                  <h3 className="text-xl font-semibold text-gold-300 mb-4">3. 타로카드 데이터 초기화</h3>
                  <p className="text-purple-200/80 mb-4">데이터베이스 스키마 실행 후 78장의 타로카드 데이터를 초기화하세요:</p>
                  {supabaseStatus === 'connected' && (
                    <button 
                      onClick={handleInitializeCards}
                      disabled={isInitializing}
                      className={`mb-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                        isInitializing ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {isInitializing ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          초기화 중...
                        </div>
                      ) : (
                        '🃏 카드 데이터 초기화'
                      )}
                    </button>
                  )}
                  {cardsExist && (
                    <p className="text-green-300 text-sm mb-4">✅ {cardsCount}장의 카드 데이터가 이미 존재합니다.</p>
                  )}
                </div>
                
                <div className="bg-purple-900/30 rounded-lg p-6 border border-purple-300/10">
                  <h3 className="text-xl font-semibold text-gold-300 mb-4">4. 개발 서버 재시작</h3>
                  <pre className="bg-black/50 p-4 rounded text-green-300 text-sm">
{`npm install
npm start`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 푸터 */}
      <footer className="bg-black/20 backdrop-blur-sm border-t border-purple-300/20 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-purple-200/70">
          <p className="mb-2">🌟 타로카드 리딩은 참고용이며, 최종 결정은 본인의 판단에 따라 하시기 바랍니다 🌟</p>
          <p className="text-sm">© 2024 타로카드 리딩 웹서비스. Made with 💜 & React</p>
        </div>
      </footer>
    </div>
  );
}

export default App;