import React, { useState, useEffect } from 'react';
import { supabase, signOut, getCurrentUser } from '../lib/supabase';
import AuthModal from './AuthModal';

const Header = () => {
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    // 현재 사용자 확인
    getCurrentUser().then(({ user }) => {
      setUser(user);
    });

    // 인증 상태 변경 감지
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      console.error('로그아웃 오류:', error);
    }
  };

  return (
    <>
      <header className="w-full bg-black/20 backdrop-blur-sm border-b border-purple-300/20 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* 로고 */}
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

          {/* 인증 영역 */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="text-purple-200">
                  <span className="text-sm">안녕하세요,</span>
                  <br />
                  <span className="font-semibold">{user.email}</span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="bg-purple-600/80 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  로그아웃
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="mystical-button"
              >
                로그인 / 회원가입
              </button>
            )}
          </div>
        </div>
      </header>

      {/* 인증 모달 */}
      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}
    </>
  );
};

export default Header;