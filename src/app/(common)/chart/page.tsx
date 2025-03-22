import ChartPage from "@/app/(common)/chart/ChartPage";
import fetchPosts from "@/lib/\bapi/fetchPosts";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "한터글로벌 | 차트",
  description: "실시간 K-POP 순위를 확인해보세요!",
  icons: "/icon.ico",
  openGraph: {
    title: "한터차트",
    description: "실시간 K-POP 순위를 확인해보세요!",
  },
};

export default async function Page() {
  const queryClient = new QueryClient();

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
