import { useRef, useState } from "react";
import { SwiperClass } from "swiper/react";

export default function useSwiperAutoplay() {
  // swipe ref
  const swiperRef = useRef<SwiperClass>(null);
  // 자동회전 상태
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleAutoplay = () => {
    if (!swiperRef.current) return;
    if (isPlaying) {
      // 버튼 클릭 시 isPlaying이 true면 오토 플레이를 멈춤.
      swiperRef.current.autoplay.stop();
    } else {
      // 버튼 클릭 시 isPlaying이 true면 오토 플레이를 시작.
      swiperRef.current.autoplay.start();
    }
    // 오토 플레이 상태를 변경
    setIsPlaying(!isPlaying);
  };
  return { swiperRef, isPlaying, toggleAutoplay };
}
