# 🔮 타로카드 웹서비스

신비로운 타로카드 리딩을 제공하는 현대적인 웹 애플리케이션입니다. React와 Supabase를 활용하여 구축되었으며, 전통적인 Rider-Waite 타로덱의 78장 카드를 통해 과거-현재-미래 스프레드 리딩을 제공합니다.

<!-- Trigger Vercel redeploy with latest commit -->

## ✨ 주요 기능

- **78장 완전한 타로카드 덱** - 메이저 아르카나 22장 + 마이너 아르카나 56장
- **3장 카드 스프레드** - 과거, 현재, 미래의 메시지 확인
- **한글 해석** - 각 카드의 정방향/역방향 의미를 500자 내외로 상세 제공
- **카드 애니메이션** - 선택, 뒤집기, 호버 효과 등 부드러운 애니메이션
- **사용자 인증** - Supabase Auth를 통한 회원가입/로그인
- **리딩 기록 저장** - 과거 리딩 결과를 저장하고 다시 확인 가능
- **반응형 디자인** - 데스크톱, 태블릿, 모바일 모든 기기에서 최적화
- **신비로운 UI/UX** - 보라색과 금색 테마의 아름다운 그라데이션 디자인

## 🛠 기술 스택

### Frontend
- **React 18** - 최신 React 기능 활용
- **Tailwind CSS** - 유틸리티 기반 CSS 프레임워크
- **Custom CSS Animations** - 카드 뒤집기, 호버 효과 등

### Backend & Database
- **Supabase** - PostgreSQL 기반 BaaS
- **Supabase Auth** - 사용자 인증 및 관리
- **Row Level Security** - 데이터 보안 정책

### Deployment
- **Vercel** - 프론트엔드 배포
- **Supabase** - 데이터베이스 및 API

## 📁 프로젝트 구조

```
tarot-app/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx           # 헤더 및 인증
│   │   │   ├── AuthModal.jsx        # 로그인/회원가입 모달
│   │   │   ├── TarotBoard.jsx       # 메인 게임 보드
│   │   │   ├── CardDeck.jsx         # 78장 카드 표시
│   │   │   ├── TarotCard.jsx        # 개별 카드 컴포넌트
│   │   │   ├── SelectedCards.jsx    # 선택된 3장 표시
│   │   │   ├── InterpretationPanel.jsx # 해석 결과
│   │   │   └── History.jsx          # 리딩 기록
│   │   ├── data/
│   │   │   └── tarotCards.js        # 78장 카드 데이터
│   │   ├── lib/
│   │   │   └── supabase.js          # Supabase 설정
│   │   ├── styles/
│   │   │   └── index.css            # Tailwind + 커스텀 CSS
│   │   ├── App.jsx                  # 메인 앱 컴포넌트
│   │   └── index.js                 # React 진입점
│   ├── package.json
│   ├── tailwind.config.js
│   └── .env.local
└── supabase/
    └── migrations/
        └── 001_schema.sql           # 데이터베이스 스키마
```

## 🚀 설치 및 실행

### 1. 저장소 클론 및 의존성 설치

```bash
# 프로젝트 클론
cd tarot-app/frontend

# 의존성 설치
npm install
```

### 2. 데이터베이스 설정

1. [Supabase](https://supabase.com) 계정 생성 및 새 프로젝트 생성
2. 데이터베이스 설정:
   ```sql
   -- supabase/migrations/001_schema.sql 파일의 내용을 
   -- Supabase SQL 에디터에서 실행
   ```
3. Project Settings > API에서 URL과 anon key 확인

### 3. 환경 변수 설정

`.env.local` 파일을 생성하여 Supabase 정보 입력:

```env
REACT_APP_SUPABASE_URL=your_supabase_project_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. 개발 서버 실행

```bash
npm start
```

브라우저에서 `http://localhost:3000`으로 접속하여 확인하세요.

## 📊 데이터베이스 스키마

### tarot_cards 테이블
- 78장의 타로카드 기본 정보 및 한글 해석 저장
- 메이저/마이너 아르카나 구분
- 정방향/역방향 의미 및 키워드

### readings 테이블
- 사용자의 리딩 기록 저장
- 선택된 카드 정보 (JSON 형태)
- 질문 및 해석 내용

### favorites 테이블 (향후 확장)
- 즐겨찾기 리딩 저장

## 🎨 UI/UX 특징

### 디자인 컨셉
- **신비로운 보라색 테마** - 깊은 보라색과 인디고 그라데이션
- **금색 강조** - 중요한 요소에 금색 포인트
- **글래스모피즘** - 반투명 배경과 백드롭 블러 효과

### 애니메이션
- **카드 호버 효과** - 살짝 떠오르는 느낌의 호버
- **카드 뒤집기** - 3D 회전 효과로 카드 공개
- **페이드인/슬라이드** - 부드러운 컨텐츠 전환
- **글로우 효과** - 선택된 카드의 빛나는 효과

## 🔮 타로카드 해석 시스템

### 카드 선택 로직
1. 사용자가 78장 중 3장을 직관적으로 선택
2. 각 카드는 50% 확률로 자동 역방향 설정
3. 선택 순서에 따라 과거-현재-미래 포지션 할당

### 해석 제공
- **개별 카드 해석** - 포지션별 의미와 카드별 해석
- **종합 해석** - 3장 카드의 전체적인 메시지
- **키워드 표시** - 각 카드의 핵심 키워드 태그

## 🚢 배포 가이드

### 1. GitHub 레포지토리 준비

```bash
# Git 초기화 (프로젝트 루트에서)
cd tarot-app
git init
git add .
git commit -m "Initial commit: Tarot card reading app

🔮 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# GitHub에서 새 레포지토리 생성 후 연결
git branch -M main
git remote add origin https://github.com/yourusername/tarot-app.git
git push -u origin main
```

### 2. Vercel 배포

#### 단계별 가이드:
1. [Vercel](https://vercel.com) 접속 및 GitHub로 로그인
2. **"Add New..." > "Project"** 선택
3. GitHub 레포지토리 import
4. **프로젝트 설정**:
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend` ⚠️ 매우 중요!
   - **Build Command**: `npm run build` (기본값)
   - **Output Directory**: `build` (기본값)
   - **Install Command**: `npm install` (기본값)

#### Vercel 설정 파일 (이미 생성됨):
- `vercel.json` - Vercel 배포 설정
- 빌드 최적화 및 라우팅 설정 포함

### 3. 환경 변수 설정

Vercel 대시보드에서:
1. 프로젝트 선택 → **Settings** → **Environment Variables**
2. 다음 변수들 추가:

```
Variable Name: REACT_APP_SUPABASE_URL
Value: your_supabase_project_url

Variable Name: REACT_APP_SUPABASE_ANON_KEY  
Value: your_supabase_anon_key
```

⚠️ **중요**: `REACT_APP_` 접두어 필수!

### 4. 자동 배포

- `main` 브랜치 푸시 시 자동 배포
- Preview 배포: PR 생성 시 미리보기 제공
- 배포 완료 후 Vercel URL 제공

### 5. 배포 확인 사항

✅ **배포 성공 체크리스트**:
- [ ] Root Directory가 `frontend`로 설정됨
- [ ] 환경 변수 올바르게 설정됨
- [ ] 빌드 성공 (Build 로그 확인)
- [ ] Supabase 연결 테스트 통과
- [ ] 타로카드 데이터 초기화 가능
- [ ] 모든 페이지 접근 가능

## 🔧 향후 개선 계획

- [ ] **카드 이미지 추가** - Supabase Storage에 실제 타로카드 이미지 업로드
- [ ] **일일 운세** - 하루 한 장 뽑기 모드
- [ ] **다양한 스프레드** - 켈틱 크로스, 관계 스프레드 등
- [ ] **SNS 공유** - 리딩 결과 이미지로 공유
- [ ] **푸시 알림** - 일일 운세 알림 기능
- [ ] **다국어 지원** - 영어, 일본어 해석 추가
- [ ] **음성 해설** - TTS를 통한 음성 해석
- [ ] **테마 변경** - 다양한 색상 테마 제공

## 🐛 알려진 이슈

- 카드 이미지가 현재 플레이스홀더로 표시됨 (실제 이미지 필요)
- 모바일에서 카드 그리드 스크롤 최적화 필요
- Safari에서 일부 CSS 애니메이션 호환성 이슈

## 📜 라이센스

이 프로젝트는 MIT 라이센스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 🤝 기여 방법

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 지원

문의사항이나 버그 리포트는 GitHub Issues를 통해 남겨주세요.

---

✨ **행운을 빕니다! 타로카드가 전하는 신비로운 메시지를 만나보세요!** ✨