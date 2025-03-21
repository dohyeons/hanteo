"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-4">
      <h2>목록 조회 중 에러가 발생했습니다!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="text-pink-400 border border-pink-400 rounded-full px-2"
      >
        재시도
      </button>
    </div>
  );
}
