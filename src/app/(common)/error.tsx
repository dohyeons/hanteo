"use client";

// 에러 발생 시 표시되는 컴포넌트
export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-4">
      {/* 에러 메시지*/}
      <h2>목록 조회 중 에러가 발생했습니다!</h2>
      {/* 재시도 버튼 - 클릭 시 reset 함수 호출*/}
      <button
        onClick={() => reset()}
        className="text-pink-400 border border-pink-400 rounded-full px-2"
      >
        재시도
      </button>
    </div>
  );
}
