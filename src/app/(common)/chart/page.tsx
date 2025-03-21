import ChartPage from "@/app/(common)/chart/ChartPage";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import axios from "axios";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};
const fetchPosts = async ({
  pageParam = 1,
}): Promise<{ data: Post[]; nextPage: number | null }> => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=10`,
    );
    return { data: res.data, nextPage: res.data.length < 10 ? null : pageParam + 1 };
  } catch {
    throw new Error("Failed to fetch posts");
  }
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
