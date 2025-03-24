import ChargingPage from "@/app/(common)/charging/ChargingPage";
import fetchPosts from "@/lib/\bapi/fetchPosts";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { Metadata } from "next";

// metadata 설정
export const metadata: Metadata = {
  title: "한터글로벌 | 충전소",
  description: "굿즈 구매를 위한 캐시를 충전하세요!",
  icons: "/icon.ico",
  openGraph: {
    title: "한터충전소",
    description: "굿즈 구매를 위한 캐시를 충전하세요!",
    images: [{ url: "/og/charging.png", width: 800, height: 400 }],
  },
  keywords: ["한터", "충전소", "굿즈", "캐시", "한터글로벌"],
  robots: "index, follow",
};

export default async function Page() {
  const queryClient = new QueryClient();

  // 데이터 prefetch
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["charging"],
    queryFn: ({ pageParam = 1 }) => fetchPosts({ pageParam }),
    initialPageParam: 1,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ChargingPage />
    </HydrationBoundary>
  );
}
