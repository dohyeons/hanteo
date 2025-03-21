// import { useSuspenseInfiniteQuery, UseSuspenseInfiniteQueryOptions } from "@tanstack/react-query";
// import { useEffect, useCallback } from "react";
// import { useInView } from "react-intersection-observer";

// type GatheringListProps<T> = {
//   render: (item: T) => React.ReactNode;
//   emptyMessage: string;
//   queryOption: UseSuspenseInfiniteQueryOptions<T[], Error>;
// };

// export default function ContentList<T>({
//   render,
//   emptyMessage,
//   queryOption,
// }: GatheringListProps<T>) {
//   const { data, error, isFetchingNextPage, hasNextPage, fetchNextPage } = useSuspenseInfiniteQuery({
//     ...queryOption,
//     staleTime: 300000,
//   });

//   const { ref, inView } = useInView({
//     threshold: 0.1, // ✅ 10%만 보여도 트리거
//     triggerOnce: false,
//   });

//   const handleFetchNextPage = useCallback(() => {
//     if (hasNextPage && !isFetchingNextPage) {
//       fetchNextPage();
//     }
//   }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

//   useEffect(() => {
//     if (inView) {
//       handleFetchNextPage();
//     }
//   }, [inView, handleFetchNextPage]);

//   if (error) {
//     return (
//       <div className="flex flex-1 items-center justify-center">
//         <p>목록 조회 중 에러가 발생했습니다.</p>
//       </div>
//     );
//   }

//   console.log(data);
//   const content = data.pages.flatMap((page) => page);
//   return (
//     <>
//       {content.length ? (
//         <>
//           {content.map((item) => render(item))}
//           <div ref={ref}>{isFetchingNextPage ? "Loading more..." : " "}</div>
//         </>
//       ) : (
//         <div className="flex flex-1 items-center justify-center">
//           <p>{emptyMessage}</p>
//         </div>
//       )}
//     </>
//   );
// }
