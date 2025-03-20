"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const banners = [
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
  return (
    <div className="w-full max-w-[1200px] mx-auto my-3">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1.2}
        loop={true}
        centeredSlides={true}
        pagination={{ el: ".custom-pagination", clickable: true }}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <a href={banner.link} target="_blank" rel="noopener noreferrer" className="block">
              <div className="shadow-[0_1px_10px_rgba(0,0,0,0.1)] mb-3 border border-gray-200 w-full rounded-lg flex flex-col gap-4 overflow-hidden cursor-pointer">
                <Image
                  src={banner.image}
                  alt={`Banner ${banner.id}`}
                  width={1280}
                  height={850}
                  className="w-full aspect-[3/1.2] object-cover"
                />
                {/* 카드의 컨텐츠 부분 */}
                <div className="flex flex-col gap-2 px-2 py-1">
                  <div className="flex justify-between">
                    <div>
                      <span className="font-bold max-w-[180px] truncate block">{banner.title}</span>
                    </div>
                    <button className="font-bold text-sm cursor-pointer hover:border-pink-300 hover:text-pink-300 text-pink-400 border border-pink-400 rounded-full px-2">
                      투표하기
                    </button>
                  </div>
                  <div className="ml-auto">
                    <span className="text-xs">{banner.duration}</span>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* TailwindCSS로 스타일 적용된 페이지네이션 */}
      <div className="custom-pagination transform flex justify-center gap-2"></div>
    </div>
  );
}
