import NewsPage from "@/app/(common)/news/NewsPage";
import fetchPosts from "@/lib/\bapi/fetchPosts";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "한터글로벌 | 뉴스",
  description: "최신 K-POP 뉴스를 확인해보세요!",
  icons: "/icon.ico",
  openGraph: {
    title: "한터글로벌 뉴스",
    description: "최신 K-POP 뉴스",
  },
  keywords: ["한터", "K-POP 뉴스", "한터글로벌"],
  robots: "index, follow",
};

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["event"],
    queryFn: ({ pageParam = 1 }) => fetchPosts({ pageParam }),
    initialPageParam: 1,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NewsPage />
    </HydrationBoundary>
  );
}
