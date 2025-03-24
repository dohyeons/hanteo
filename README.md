<div align='center'>
<h1 align='center'>한터글로벌 서비스개발실 프론트엔드 개발자 코딩테스트입니다.</h1>
<br /><br />

<br /><br />

<a href='https://hanteo-five.vercel.app/'> 방문하기</a>


</div>


<br /><br /><br /><br /><br />


## 📦 설치 및 실행 방법

### 1. 저장소 클론
git clone https://github.com/dohyeons/hanteo.git
cd hanteo

### 2. 패키지 설치
npm install

### 3. 개발 서버 실행
npm run dev

<br /><br /><br /><br /><br />

## 🔨 Skills

<br /><br />

|Front-end|
|:-------:|
|JavaScript, Typescript|
|Next.js|
|TailwindCSS|
|Tanstack query|
|axios|
|react-swipeable|
|react-intersection-observer|

<br /><br /><br /><br /><br />

## ✅ 필수 기능 기능 리스트

<br /><br />

- [x] 카테고리 컨텐츠 무한 스크롤
- [x] 탭을 사용한 카테고리 이동
- [x] 슬라이드 터치를 사용한 카테고리 이동
- [x] 배너 무한루프 및 외부 링크 이동

<br /><br /><br /><br /><br />

## ✨ 기능 소개

<br />

### /chart 로 리다이렉트

/로 방문 시 /chart로 리다이렉트 됩니다.

### 반응형 디자인

TailwindCSS를 기반으로 레이아웃을 구성해 각자 다른 크기의 화면에서도 디자인이 적용됩니다.

### 무한 스크롤
Intersection Observer를 활용해 컨텐츠가 자동으로 로딩되도록 구현했습니다.

### 데이터 표시
JSONPlaceholder API에서 게시글 목록 불러오기를 구현했습니다.

### SEO 최적화
실제 웹 개발 시 차트, 뉴스 등 검색엔진에서 상위 노출이 중요하다고 생각되어 metadata 객체를 활용한 SEO 최적화를 진행했습니다. 

### prefetch
사용자에게 완성된 HTML을 전송해 UX를 높이기 위해 데이터를 prefetch했습니다. 
prefetchInfiniteQuery()를 활용하여 페이지 렌더링 전에 데이터를 미리 요청해두고,
HydrationBoundary를 통해 클라이언트에서 빠르게 데이터를 사용할 수 있도록 처리했습니다.

### 헤더 가로 스크롤 구현
화면 너비가 작아져 헤더의 Nav 전체를 볼 수 없어도 스크롤을 통해 다음 Nav 아이템을 확인할 수 있도록 구현했습니다.

### 슬라이드 터치를 사용한 라우팅
컨텐츠 부분에서 터치로 슬라이드 해 다음 카테고리로 이동할 수 있습니다. 웹 버전에서도 드래그를 사용해 동일하게 작동합니다.
