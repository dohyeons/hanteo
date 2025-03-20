import { useSuspenseInfiniteQuery, UseSuspenseInfiniteQueryOptions } from "@tanstack/react-query";

type GatheringListProps<T> = {
  render: (item: T) => React.ReactNode;
  emptyMessage: string;
  queryOption: UseSuspenseInfiniteQueryOptions<T[], Error>;
};

export default function MypageList<T>({
  render,
  emptyMessage,
  queryOption,
}: GatheringListProps<T>) {
  const { data, error } = useSuspenseInfiniteQuery({ ...queryOption, staleTime: 300000 });

  if (error) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <p>목록 조회 중 에러가 발생했습니다.</p>
      </div>
    );
  }
  return (
    <>
      {data.length ? (
        <>{data.map((item) => render(item))}</>
      ) : (
        <div className="flex flex-1 items-center justify-center">
          <p>{emptyMessage}</p>
        </div>
      )}
    </>
  );
}
