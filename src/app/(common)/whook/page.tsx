import WhookPage from "@/app/(common)/whook/WhookPage";
import fetchPosts from "@/lib/\bapi/fetchPosts";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { Metadata } from "next";

// metadata 설정
export const metadata: Metadata = {
  title: "한터글로벌 | Whook",
  description: "K-POP 굿즈를 구매해보세요!",
  icons: "/icon.ico",
  openGraph: {
    title: "한터글로벌 Whook",
    description: "한터글로벌 Whook",
    images: [{ url: "/og/whook.png", width: 800, height: 400 }],
  },
  keywords: ["한터", "Whook", "한터글로벌"],
  robots: "index, follow",
};

export default async function Page() {
  const queryClient = new QueryClient();

  // 데이터 prefetch
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["store"],
    queryFn: ({ pageParam = 1 }) => fetchPosts({ pageParam }),
    initialPageParam: 1,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <WhookPage />
    </HydrationBoundary>
  );
}
