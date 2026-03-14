# MoodDate

> 오늘의 기분을 공유하고 데이트 코스를 함께 계획하고 기록하는 커플 서비스

🔗 **배포 링크**: [https://mood-date.vercel.app](https://mood-date.vercel.app)

---

## 📖 프로젝트 소개

MoodDate는 커플을 위한 데이트 플래너 웹 서비스입니다.
오늘의 감정을 서로 공유하고, 카카오 지도로 장소를 검색해 데이트 코스를 직접 계획하고 기록할 수 있습니다.

---

## 🛠️ 기술 스택

<div>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
  <img src="https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white"/>
  <img src="https://img.shields.io/badge/Kakao Map API-FFCD00?style=for-the-badge&logo=kakao&logoColor=black"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
</div>

---

## ✨ 주요 기능

### 🗺️ 카카오 지도 검색
- 키워드로 장소 검색 및 마커 표시
- 음식점, 카페, 관광명소 등 카테고리별 주변 장소 탐색
- 마커 클릭 시 장소명 인포윈도우 표시

### 📋 데이트 플래너
- 장소, 시간, 메모를 카드 형태로 일정 추가
- 일정 순서 변경 (↑↓)
- 일정 삭제
- localStorage로 새로고침해도 데이터 유지

### 💛 감정 공유
- 성별에 따른 감정 카드 활성화
- 커플 코드로 감정 연결

### 🔐 회원 관리
- 회원가입 / 로그인 (localStorage 기반)
- 기념일 / 생일 날짜 설정

---

## 📸 스크린샷

| 메인 페이지 | 데이트 플래너 | 감정 선택 |
|:---:|:---:|:---:|
| <img width="1582" height="945" alt="Image" src="https://github.com/user-attachments/assets/30771ece-f45d-4064-ad5d-46ef3fc7b809" />  | <img width="1582" height="945" alt="Image" src="https://github.com/user-attachments/assets/9dcd4ff1-d06e-490d-9806-f990e43d148d" /> | <img width="1582" height="945" alt="Image" src="https://github.com/user-attachments/assets/e456e72a-ea8e-4f10-840f-062de239c505" /> |

---

## ⚙️ 설치 방법

```bash
# 1. 레포지토리 클론
git clone https://github.com/joyunjinis/MoodDate.git

# 2. 패키지 설치
npm install

# 3. 환경변수 설정
# .env.local 파일 생성 후 아래 내용 추가
NEXT_PUBLIC_KAKAOMAP_KEY=카카오맵_API_키

# 4. 개발 서버 실행
npm run dev
```

> 카카오 개발자 센터에서 앱을 등록하고 JavaScript 키를 발급받아야 합니다.
> Web 플랫폼에 `http://localhost:3000`을 등록해주세요.

---

## 📁 프로젝트 구조

```
mooddate/
├── app/
│   ├── main/
│   │   └── plan/          # 데이트 플래너 페이지
│   ├── connect/
│   │   └── anniversary/   # 기념일 설정 페이지
│   └── layout.tsx         # 카카오 SDK 스크립트 로드
├── components/
│   ├── main/
│   │   ├── Map.tsx        # 카카오 지도 컴포넌트
│   │   └── Plan.tsx       # 플래너 메인 컴포넌트
│   └── planner/
│       ├── AddPlace.tsx   # 장소 추가 폼
│       ├── CardList.tsx   # 일정 카드 목록
│       └── DateSelect.tsx # 날짜 선택 (shadcn Calendar)
└── .env.local             # 환경변수 (API 키)
```
