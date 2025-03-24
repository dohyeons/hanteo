import { useRef, useState } from "react";
import { SwiperClass } from "swiper/react";

export default function useAutoplaySwiper() {
  const swiperRef = useRef<SwiperClass>(null); // Added swiperRef
  const [isPlaying, setIsPlaying] = useState(true); // Added isPlaying state

  const toggleAutoplay = () => {
    // Added toggleAutoplay function
    if (!swiperRef.current) return;
    if (isPlaying) {
      swiperRef.current.autoplay.stop();
    } else {
      swiperRef.current.autoplay.start();
    }
    setIsPlaying(!isPlaying);
  };
  return { swiperRef, isPlaying, toggleAutoplay };
}
