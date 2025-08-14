import React, { useState } from 'react';
import { signInWithEmail, signUpWithEmail } from '../lib/supabase';

const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isLogin) {
        const { error } = await signInWithEmail(email, password);
        if (error) throw error;
      } else {
        const { error } = await signUpWithEmail(email, password);
        if (error) throw error;
        alert('회원가입 완료! 이메일 인증 후 로그인해주세요.');
      }
      onClose();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-xl p-6 w-full max-w-md border border-purple-300/20 shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            {isLogin ? '로그인' : '회원가입'}
          </h2>
          <button
            onClick={onClose}
            className="text-purple-300 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-purple-200 text-sm font-medium mb-2">
              이메일
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-black/30 border border-purple-300/30 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400"
              placeholder="이메일을 입력하세요"
            />
          </div>

          <div>
            <label className="block text-purple-200 text-sm font-medium mb-2">
              비밀번호
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full px-4 py-3 bg-black/30 border border-purple-300/30 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400"
              placeholder="비밀번호를 입력하세요 (최소 6자)"
            />
          </div>

          {error && (
            <div className="bg-red-900/50 border border-red-500/50 rounded-lg p-3">
              <p className="text-red-200 text-sm">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full mystical-button"
          >
            {loading ? '처리 중...' : (isLogin ? '로그인' : '회원가입')}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-purple-300 hover:text-white transition-colors text-sm"
          >
            {isLogin ? '계정이 없으신가요? 회원가입' : '이미 계정이 있으신가요? 로그인'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;