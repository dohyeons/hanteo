"use client";

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type Item = {
  id: number;
  title: string;
  body: string;
};

type ContentListProps = {
  queryKey: string[];
  fetchFunction: ({
    pageParam,
  }: {
    pageParam: number;
  }) => Promise<{ data: Item[]; nextPage: number | null }>;
  renderItem: (item: Item) => React.ReactNode;
};

export default function ContentList({ queryKey, fetchFunction, renderItem }: ContentListProps) {
  const { data, error, isFetchingNextPage, hasNextPage, fetchNextPage } = useSuspenseInfiniteQuery({
    queryKey: queryKey,
    queryFn: fetchFunction,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1,
  });

  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, isFetchingNextPage, hasNextPage]);

  if (error) {
    throw new Error("데이터를 불러오는 중 오류 발생");
  }

  return (
    <>
      {data?.pages.map((page) => page.data.map((item) => renderItem(item)))}
      <div ref={ref}>{isFetchingNextPage ? "Loading more..." : " "}</div>
    </>
  );
}
