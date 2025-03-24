"use client";

import useDragScroll from "@/hooks/useDragScroll";

export default function DragScrollContainer({ children }: { children: React.ReactNode }) {
  const { containerRef, onDragStart, onDragMove, onDragEnd } = useDragScroll();

  return (
    // 드래그 스크롤 기능이 적용된 수평 스크롤 컨테이너
    <div
      className="hide-scrollbar flex w-full snap-x gap-4 overflow-scroll"
      ref={containerRef}
      // 드래그 시작 이벤트
      onMouseDown={onDragStart}
      // 드래그 중 이벤트
      onMouseMove={onDragMove}
      // 드래그 종료 및 영역 벗어남 이벤트
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
    >
      {children}
    </div>
  );
}
