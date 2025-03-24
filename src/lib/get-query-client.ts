import { QueryClient, defaultShouldDehydrateQuery, isServer } from "@tanstack/react-query";

// QueryClient 인스턴스를 생성하는 함수
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 쿼리의 만료 시간을 60초로 설정
      },
      dehydrate: {
        // 쿼리의 상태가 'pending'인 경우에도 dehydrate할 수 있도록 설정
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) || query.state.status === "pending",
      },
    },
  });
}

// 브라우저용 QueryClient를 캐싱하기 위한 변수
let browserQueryClient: QueryClient | undefined = undefined;

// 서버와 클라이언트 환경에 따라 QueryClient를 다르게 반환
export function getQueryClient() {
  if (isServer) {
    // 서버 환경에서는 새로운 QueryClient를 생성하여 반환
    return makeQueryClient();
  } else {
    // 브라우저 환경에서는 캐시된 QueryClient를 사용하거나 새로 생성
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}
