import EventsPage from "@/app/(common)/events/EventsPage";
import fetchPosts from "@/lib/\bapi/fetchPosts";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "한터글로벌 | 이벤트",
  description: "진행중인 이벤트를 확인하세요!",
  icons: "/icon.ico",
  openGraph: {
    title: "한터글로벌 이벤트",
    description: "진행중인 이벤트를 확인하세요!",
    images: [{ url: "/og/event.png" }],
  },
  keywords: ["한터", "이벤트", "K-POP", "한터글로벌"],
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
      <EventsPage />
    </HydrationBoundary>
  );
}
