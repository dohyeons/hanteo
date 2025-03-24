"use client";

import { useSwipeable } from "react-swipeable";
import { useRouter, usePathname } from "next/navigation";

// 스와이프로 이동할 수 있는 라우트 목록
const routes = ["/chart", "/whook", "/events", "/news", "/store", "/charging"];

export default function SwipeRouter({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const currentIndex = routes.indexOf(pathname);

  // 스와이프 제스처 핸들러 설정
  const handlers = useSwipeable({
    // 왼쪽으로 스와이프 시 다음 페이지로 이동
    onSwipedLeft: () => {
      if (currentIndex < routes.length - 1) {
        router.push(routes[currentIndex + 1]);
      }
    },
    // 오른쪽으로 스와이프 시 이전 페이지로 이동
    onSwipedRight: () => {
      if (currentIndex > 0) {
        router.push(routes[currentIndex - 1]);
      }
    },
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: true,
    delta: 80,
  });

  return (
    <div {...handlers} className="flex flex-col flex-1 touch-pan-y">
      {children}
    </div>
  );
}
