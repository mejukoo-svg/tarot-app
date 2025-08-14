import React, { useState, useEffect } from 'react';
import { db, dbInfo, supabase, neonHelpers } from './lib/database';
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
          <div className="bg-red-900/30 rounded-lg p-4 border border-red-300/10 text-left">
            <h3 className="text-lg font-semibold text-red-300 mb-3">🚨 설정 필요</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-red-200 mb-2">네틀리파이 환경 변수 설정:</h4>
                <ol className="text-red-200/80 space-y-1 text-sm ml-4">
                  <li>1. <a href="https://app.netlify.com" target="_blank" rel="noopener noreferrer" className="text-red-300 underline">네틀리파이 대시보드</a> 접속</li>
                  <li>2. 사이트 선택 → Site settings → Environment variables</li>
                  <li>3. 다음 변수 추가:</li>
                </ol>
                <div className="bg-black/50 p-3 rounded mt-2 text-green-300 text-xs font-mono">
                  REACT_APP_NEON_DATABASE_URL=postgresql://user:pass@host/db<br/>
                  또는<br/>
                  REACT_APP_SUPABASE_URL=https://your-project.supabase.co<br/>
                  REACT_APP_SUPABASE_ANON_KEY=your_anon_key
                </div>
              </div>
              <div className="text-red-200/60 text-xs">
                💡 환경 변수 설정 후 사이트가 자동으로 재배포됩니다
              </div>
            </div>
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
          
          <div className="space-y-2">
            <button 
              onClick={() => cardsExist ? onViewChange('tarot') : onViewChange('setup')}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              🔮 타로 리딩 시작
            </button>
            
            {supabaseStatus === 'error' && (
              <button 
                onClick={() => onViewChange('demo')}
                className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                🎭 데모 모드로 체험해보기
              </button>
            )}
          </div>
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

  // React 앱이 로드되면 로딩 화면 숨기기
  useEffect(() => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.style.display = 'none';
    }
  }, []);

  useEffect(() => {
    // 데이터베이스 연결 테스트 및 카드 데이터 확인
    const testDatabaseConnection = async () => {
      try {
        // 데이터베이스가 설정되지 않은 경우
        if (!db || !dbInfo.connected) {
          setSupabaseStatus('error');
          const errorMsg = dbInfo.error || '데이터베이스 환경 변수가 설정되지 않았습니다.';
          setConnectionMessage(`⚠️ ${errorMsg}`);
          
          // 콘솔에 자세한 설정 가이드 출력
          console.error('📋 네틀리파이 환경 변수 설정 가이드:');
          console.error('1. 네틀리파이 대시보드 → Site settings → Environment variables');
          console.error('2. 다음 변수 중 하나를 추가:');
          console.error('   - REACT_APP_NEON_DATABASE_URL=postgresql://user:pass@host/db');
          console.error('   - REACT_APP_SUPABASE_URL + REACT_APP_SUPABASE_ANON_KEY');
          console.error('3. 사이트 재배포 필요');
          return;
        }

        // 기본 연결 테스트 (Neon 또는 Supabase)
        if (dbInfo.driver === 'neon-serverless') {
          // Neon 연결 테스트
          const cardStatus = await neonHelpers.checkTarotCardsExist();
          setCardsExist(cardStatus.exists);
          setCardsCount(cardStatus.count);
          
          setSupabaseStatus('connected');
          if (cardStatus.exists) {
            setConnectionMessage(`✨ ${dbInfo.type} 연결 성공! (${cardStatus.count}장의 카드 데이터 존재)`);
          } else {
            setConnectionMessage(`✨ ${dbInfo.type} 연결 성공! (카드 데이터 초기화 필요)`);
          }
          console.log(`✅ ${dbInfo.type} 연결 성공, 카드 데이터:`, cardStatus);
        } else if (dbInfo.driver === 'supabase-js') {
          // Supabase 연결 테스트
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
            setConnectionMessage(`✨ ${dbInfo.type} 연결 성공! (${cardStatus.count}장의 카드 데이터 존재)`);
          } else {
            setConnectionMessage(`✨ ${dbInfo.type} 연결 성공! (카드 데이터 초기화 필요)`);
          }
          console.log(`✅ ${dbInfo.type} 연결 성공, 카드 데이터:`, cardStatus);
        }
      } catch (error) {
        setSupabaseStatus('error');
        setConnectionMessage(`❌ ${dbInfo.type || '데이터베이스'} 연결 실패: ${error.message}`);
        console.error('❌ 데이터베이스 연결 오류:', error);
      }
    };

    testDatabaseConnection();
  }, []);

  // 타로카드 데이터 초기화 함수
  const handleInitializeCards = async () => {
    if (isInitializing) return;
    
    setIsInitializing(true);
    try {
      let result;
      
      if (dbInfo.driver === 'neon-serverless') {
        // Neon 데이터베이스 초기화
        const { tarotCardsData } = await import('./data/tarotCards');
        result = await neonHelpers.initializeTarotCards(tarotCardsData);
      } else {
        // Supabase 초기화
        result = await initializeTarotCards();
      }
      
      if (result.success) {
        // 초기화 성공 시 상태 업데이트
        setCardsExist(true);
        setCardsCount(result.count || 78);
        setConnectionMessage(`✨ ${dbInfo.type} 연결 성공! (${result.count || 78}장의 카드 데이터 존재)`);
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
              onClick={() => setCurrentView('demo')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                currentView === 'demo'
                  ? 'border-purple-400 text-purple-300'
                  : 'border-transparent text-purple-200/70 hover:text-purple-200'
              }`}
            >
              🎭 데모
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
        {currentView === 'demo' && (
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-yellow-300/20">
              <h2 className="text-3xl font-bold text-white mb-6">🎭 데모 모드</h2>
              <div className="bg-yellow-900/30 rounded-lg p-6 border border-yellow-300/20 mb-6">
                <p className="text-yellow-200 mb-4">
                  <strong>📋 현재 상태:</strong> 데이터베이스가 연결되지 않아 실제 타로카드 기능을 사용할 수 없습니다.
                </p>
                <p className="text-yellow-200/80 text-sm">
                  데모 모드에서는 제한된 기능만 체험할 수 있습니다. 
                  완전한 기능을 위해서는 네틀리파이 환경 변수를 설정해주세요.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {[1,2,3].map((num) => (
                  <div key={num} className="bg-purple-900/30 rounded-lg p-4 border border-purple-300/10 text-center">
                    <div className="w-20 h-32 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg mx-auto mb-3 flex items-center justify-center text-white font-bold">
                      🔮
                    </div>
                    <h3 className="text-white font-semibold">카드 #{num}</h3>
                    <p className="text-purple-200/70 text-sm">데모 카드</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-white mb-4">실제 타로카드 리딩을 체험하려면 설정을 완료해주세요!</p>
                <button 
                  onClick={() => setCurrentView('setup')}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  ⚙️ 설정 가이드 보기
                </button>
              </div>
            </div>
          </div>
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
                  <h3 className="text-xl font-semibold text-gold-300 mb-4">2. 네틀리파이 환경변수 설정</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-purple-200/80 mb-3">네틀리파이 대시보드에서 환경 변수를 설정하세요:</p>
                      <ol className="text-purple-200/70 space-y-2 text-sm mb-4">
                        <li>1. <a href="https://app.netlify.com" target="_blank" rel="noopener noreferrer" className="text-purple-300 underline">네틀리파이 대시보드</a> 접속</li>
                        <li>2. 사이트 선택 → Site settings → Environment variables</li>
                        <li>3. 다음 변수들을 추가:</li>
                      </ol>
                    </div>
                    
                    <div>
                      <h4 className="text-purple-300 font-semibold mb-2">Neon 데이터베이스 (권장):</h4>
                      <pre className="bg-black/50 p-3 rounded text-green-300 text-xs overflow-x-auto mb-3">
REACT_APP_NEON_DATABASE_URL=postgresql://user:pass@ep-xxx.neon.tech/neondb
                      </pre>
                    </div>
                    
                    <div>
                      <h4 className="text-purple-300 font-semibold mb-2">또는 Supabase:</h4>
                      <pre className="bg-black/50 p-3 rounded text-green-300 text-xs overflow-x-auto">
REACT_APP_SUPABASE_URL=https://xxx.supabase.co
REACT_APP_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...
                      </pre>
                    </div>
                  </div>
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