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
  // tanstack-query를 사용한 무한 스크롤 쿼리 설정
  const { data, error, isFetchingNextPage, hasNextPage, fetchNextPage } = useSuspenseInfiniteQuery({
    queryKey: queryKey,
    queryFn: fetchFunction,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1,
  });

  // intersection observer 훅으로 스크롤 위치 감지
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  // 스크롤이 바닥에 도달하면 다음 페이지 데이터를 불러옴
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, isFetchingNextPage, hasNextPage, fetchNextPage]);

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
