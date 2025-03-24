"use client";

// 페이지 상단으로 스크롤하는 버튼
import { ArrowUpToLine } from "lucide-react";

export default function ScrollToTop() {
  // 스크롤을 맨 위로 이동시키는 함수
  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`group flex size-9 cursor-pointer transform items-center justify-center rounded-full bg-blue-6 transition-all duration-300 ease-in-out `}
      onClick={scrollToTop}
    >
      <ArrowUpToLine />
    </button>
  );
}
