import StorePage from "@/app/(common)/store/StorePage";
import fetchPosts from "@/lib/\bapi/fetchPosts";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "한터글로벌 | 스토어",
  description: "K-POP 굿즈를 구매해보세요!",
  icons: "/icon.ico",
  openGraph: {
    title: "한터글로벌 스토어",
    description: "K-POP 굿즈를 구매해보세요!",
  },
  keywords: ["한터", "스토어", "굿즈", "한터글로벌"],
  robots: "index, follow",
};

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["store"],
    queryFn: ({ pageParam = 1 }) => fetchPosts({ pageParam }),
    initialPageParam: 1,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <StorePage />
    </HydrationBoundary>
  );
}
