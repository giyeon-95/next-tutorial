"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  // new QueryClient()를 컴포넌트 외부에 두면 요청 간에 데이터가 공유될 수 있어 위험합니다.
  // useState를 사용하면 컴포넌트가 처음 렌더링될 때 한 번만 생성되어 안전합니다.
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* 개발 환경에서만 Devtools를 보여줍니다. */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
