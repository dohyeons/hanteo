import ChartPage from "@/app/(common)/chart/ChartPage";
import fetchPosts from "@/lib/\bapi/fetchPosts";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { Metadata } from "next";

// metadata 설정
export const metadata: Metadata = {
  title: "한터글로벌 | 차트",
  description: "실시간 K-POP 순위를 확인해보세요!",
  icons: "/icon.ico",
  openGraph: {
    title: "한터글로벌 차트",
    description: "실시간 K-POP 순위를 확인해보세요!",
    images: [{ url: "/og/chart.png", width: 800, height: 400 }],
  },
  keywords: ["한터", "K-POP 차트", "한터글로벌"],
  robots: "index, follow",
};

export default async function Page() {
  const queryClient = new QueryClient();

  // 데이터 prefetch
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["chart"],
    queryFn: ({ pageParam = 1 }) => fetchPosts({ pageParam }),
    initialPageParam: 1,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ChartPage />
    </HydrationBoundary>
  );
}
