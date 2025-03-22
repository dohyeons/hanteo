"use client";

import useDragScroll from "@/hooks/useDragScroll";

export default function DragScrollContainer({ children }: { children: React.ReactNode }) {
  const { containerRef, onDragStart, onDragMove, onDragEnd } = useDragScroll();

  return (
    <div
      className="hide-scrollbar flex w-full snap-x gap-4 overflow-scroll"
      ref={containerRef}
      onMouseDown={onDragStart}
      onMouseMove={onDragMove}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
    >
      {children}
    </div>
  );
}
