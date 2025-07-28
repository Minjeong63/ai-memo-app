# 📝 Memora - AI 기반 음성 메모장 웹서비스

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.4.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Supabase](https://img.shields.io/badge/Supabase-3.0-3ECF8E?style=for-the-badge&logo=supabase)

**AI가 자동으로 요약하고 분류해주는 스마트 메모장**

[🚀 데모 보기](#) • [📖 문서](#) • [🐛 이슈 리포트](https://github.com/Minjeong63/ai-memo-app/issues)

</div>

---

## ✨ 주요 기능

### 🎤 **음성 메모**
- Web Speech API를 활용한 실시간 음성-텍스트 변환
- 브라우저에서 바로 음성 메모 작성 가능
- 오디오 파일 저장 및 재생 기능

### 🤖 **AI 자동 요약**
- Anthropic Claude API를 활용한 메모 내용 자동 요약
- 긴 메모를 핵심 내용으로 간결하게 정리
- 요약 결과 캐싱으로 빠른 응답

### 🏷️ **자동 분류**
- AI가 메모 내용을 분석하여 자동 카테고리 분류
- 사용자 정의 카테고리 관리
- 태그 자동 생성 및 관리

### 🔍 **스마트 검색**
- 키워드, 카테고리, 날짜별 검색
- Supabase 전체 텍스트 검색 연동
- 실시간 검색 결과 하이라이팅

### 💾 **클라우드 동기화**
- Supabase PostgreSQL 데이터베이스
- 실시간 데이터 동기화
- 안전한 사용자 인증

---

## 🛠️ 기술 스택

### **Frontend & Backend**
- **Next.js 15.4.4** - Full-stack React framework
- **React 19.1.0** - UI library
- **TypeScript** - Type-safe JavaScript

### **Styling**
- **Tailwind CSS 4.0** - Utility-first CSS framework

### **Database & ORM**
- **Supabase** - PostgreSQL database with real-time features
- **DrizzleORM** - Type-safe database client

### **AI Services**
- **Anthropic Claude API** - AI-powered text summarization and classification

### **Authentication**
- **Supabase Auth** - Built-in authentication
- **NextAuth.js** - Additional authentication providers

### **Deployment**
- **Vercel** - Hosting and deployment platform

---

## 🚀 빠른 시작

### **사전 요구사항**
- Node.js 18.0 이상
- npm 또는 yarn
- Supabase 계정
- Anthropic Claude API 키

### **설치 및 실행**

1. **저장소 클론**
```bash
git clone https://github.com/Minjeong63/ai-memo-app.git
cd ai-memo-app
```

2. **의존성 설치**
```bash
npm install
```

3. **환경 변수 설정**
```bash
cp .env.example .env.local
```

4. **개발 서버 실행**
```bash
npm run dev
```

5. **브라우저에서 확인**
```
http://localhost:3000
```

---

## 📁 프로젝트 구조

```
ai-memo-app/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── (auth)/         # 인증 관련 페이지
│   │   ├── (dashboard)/    # 메모 대시보드
│   │   ├── api/            # API 라우트
│   │   └── globals.css     # 전역 스타일
│   ├── components/         # 재사용 가능한 컴포넌트
│   │   ├── ui/            # 기본 UI 컴포넌트
│   │   ├── memo/          # 메모 관련 컴포넌트
│   │   └── auth/          # 인증 관련 컴포넌트
│   ├── lib/               # 유틸리티 및 설정
│   │   ├── supabase.ts    # Supabase 클라이언트
│   │   ├── auth.ts        # 인증 설정
│   │   └── utils.ts       # 유틸리티 함수
│   └── types/             # TypeScript 타입 정의
├── .taskmaster/           # Taskmaster 프로젝트 관리
├── public/               # 정적 파일
└── package.json
```

---

## 🎯 개발 로드맵

### **Phase 1: 기본 메모 기능** ✅
- [x] Next.js 프로젝트 초기 설정
- [ ] 사용자 인증 시스템
- [ ] 기본 텍스트 메모 CRUD
- [ ] 반응형 UI 구현

### **Phase 2: 음성 메모 기능**
- [ ] Web Speech API 연동
- [ ] 음성 녹음 및 텍스트 변환
- [ ] 오디오 파일 관리

### **Phase 3: AI 기능 통합**
- [ ] Claude API 연동
- [ ] 메모 자동 요약
- [ ] 카테고리 자동 분류

### **Phase 4: 고급 기능**
- [ ] 고급 검색 및 필터링
- [ ] 메모 공유 기능
- [ ] 사용자 설정

---

## 🤝 기여하기

1. **Fork** the Project
2. **Create** your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your Changes (`git commit -m "Add some AmazingFeature"`)
4. **Push** to the Branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### **커밋 메시지 규칙**
- 한국어 명령조 사용 (예: "기능 추가하라", "버그 수정하라")
- 구조: `[작업내용] [목적]하라`

---

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

---

## 📞 연락처

- **프로젝트 링크**: [https://github.com/Minjeong63/ai-memo-app](https://github.com/Minjeong63/ai-memo-app)
- **이슈 리포트**: [https://github.com/Minjeong63/ai-memo-app/issues](https://github.com/Minjeong63/ai-memo-app/issues)

---

<div align="center">

**⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요!**

</div>
