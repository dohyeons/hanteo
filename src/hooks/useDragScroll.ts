"use client";

import { useRef, useState } from "react";

// 드래그 스크롤 기능을 제공하는 커스텀 훅
export default function useDragScroll() {
  // 스크롤할 컨테이너에 참조를 연결
  const containerRef = useRef<HTMLDivElement>(null);

  // 드래그 상태를 추적하는 상태
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // 드래그 시작 시 마우스 위치 + 현재 스크롤 위치 저장
  const [totalX, setTotalX] = useState<number>(0);

  // 드래그 시작 이벤트 핸들러
  const onDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const x = e.clientX;
    if (containerRef.current && "scrollLeft" in containerRef.current) {
      setTotalX(x + containerRef.current.scrollLeft);
    }
  };

  // 드래그 중 이벤트 핸들러
  const onDragMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const scrollLeft = totalX - e.clientX;

    if (containerRef.current && "scrollLeft" in containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft;
    }
  };

  // 드래그 종료 이벤트 핸들러
  const onDragEnd = () => {
    if (!isDragging) return;
    if (!containerRef.current) return;

    setIsDragging(false);
  };

  // 외부에서 사용할 수 있도록 필요한 요소 반환
  return {
    containerRef, // 스크롤할 컨테이너에 대한 참조
    onDragStart, // 드래그 시작 핸들러
    onDragMove, // 드래그 이동 핸들러
    onDragEnd, // 드래그 종료 핸들러
  };
}
