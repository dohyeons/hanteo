"use client";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

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

export default function Page() {
  const { data, error, isFetchingNextPage, hasNextPage, fetchNextPage } = useSuspenseInfiniteQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage) => {
      return lastPage.nextPage;
    },
    initialPageParam: 1,
  });
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, isFetchingNextPage, hasNextPage]);

  if (error) {
    throw new Error("목록 조회 중 에러가 발생했습니다.");
  }

  return (
    <>
      {data?.pages.map((page) =>
        page.data.map((item) => (
          <div key={item.id} className="bg-white rounded-lg flex gap-4 w-full">
            <Image
              src={"/default_image.jpg"}
              alt={"순위 이미지"}
              width={1280}
              height={850}
              className="max-w-[100px] md:max-w-[200px] w-full rounded-lg"
            />
            <div className="flex flex-col">
              <h3 className="text-lg font-bold line-clamp-1 overflow-hidden text-ellipsis">
                {item.title}
              </h3>
              <p className="line-clamp-2 overflow-hidden text-ellipsis">{item.body}</p>
            </div>
          </div>
        )),
      )}
      <div ref={ref}>{isFetchingNextPage ? "Loading more..." : " "}</div>
    </>
  );
}
