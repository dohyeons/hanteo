"use client";

import { useSwipeable } from "react-swipeable";
import { useRouter, usePathname } from "next/navigation";

const routes = ["/chart", "/whook", "/events", "/news", "/store", "/charging"];

export default function SwipeRouter({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const currentIndex = routes.indexOf(pathname);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < routes.length - 1) {
        router.push(routes[currentIndex + 1]);
      }
    },
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
