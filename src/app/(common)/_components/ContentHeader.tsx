"use client";

import { usePathname } from "next/navigation";

const CONTENT_HEADING: { [key: string]: string } = {
  "/chart": "차트",
  "/charging": "충전소",
  "/events": "이벤트",
  "/news": "뉴스",
  "/store": "스토어",
  "/whook": "Whook",
};

export default function ContentHeader() {
  const pathname = usePathname();

  return <h2 className="text-2xl font-bold">{CONTENT_HEADING[pathname]}</h2>;
}
