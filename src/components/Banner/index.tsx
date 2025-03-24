"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BannerItem from "@/components/Banner/BannerItem";
import AutoPlayControl from "@/components/Banner/AutoPlayControl";
import useSwiperAutoplay from "@/hooks/useSwiperAutoplay";

// 배너 목록 정의
const BANNERS = [
  {
    id: 1,
    image: "/default_image.jpg",
    link: "https://nextjs.org/docs",
    title: "제목1",
    duration: "2020.02.08 10:00 ~ 2020.04.08 17:00 (KST)",
  },
  {
    id: 2,
    image: "/default_image.jpg",
    link: "https://nextjs.org/docs/app/getting-started/installation",
    title: "제목2",
    duration: "2020.02.08 20:00 ~ 2020.04.08 27:00 (KST)",
  },
  {
    id: 3,
    image: "/default_image.jpg",
    link: "https://nextjs.org/docs/app/getting-started/project-structure",
    title: "제목3",
    duration: "2020.02.08 10:00 ~ 2020.04.08 17:00 (KST)",
  },
  {
    id: 4,
    image: "/default_image.jpg",
    link: "https://nextjs.org/docs/app/getting-started/layouts-and-pages",
    title: "제목4",
    duration: "2020.02.08 10:00 ~ 2020.04.08 17:00 (KST)",
  },
  {
    id: 5,
    image: "/default_image.jpg",
    link: "https://nextjs.org/docs/app/getting-started/images-and-fonts",
    title: "제목5",
    duration: "2020.02.08 10:00 ~ 2020.04.08 17:00 (KST)",
  },
];

export default function Carousel() {
  const { swiperRef, isPlaying, toggleAutoplay } = useSwiperAutoplay();

  return (
    <div className="w-full max-w-[1200px] mx-auto my-3">
      {/* Swiper 슬라이더 영역 */}
      <Swiper
        modules={[Pagination, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={1.2}
        loop={true}
        centeredSlides={true}
        pagination={{ el: ".custom-pagination", clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={1500}
      >
        {/* 각 배너 슬라이드 렌더링 */}
        {BANNERS.map((banner) => (
          <SwiperSlide key={banner.id}>
            <BannerItem
              link={banner.link}
              imageUrl={banner.image}
              id={banner.id}
              title={banner.title}
              duration={banner.duration}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* 커스텀 페이지네이션(밑에 점) 렌더링 */}
      <div className="custom-pagination transform flex justify-center gap-2"></div>
      {/* 자동 회전 버튼 */}
      <AutoPlayControl isPlaying={isPlaying} toggleAutoplay={toggleAutoplay} />
    </div>
  );
}
