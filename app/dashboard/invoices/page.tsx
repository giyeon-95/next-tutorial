"use client";

import { usePokemonQuery } from "@/app/hooks/usePokemonQuiery";

export default function Page() {
  const { data, isLoading, isError, error } = usePokemonQuery("all");

  if (isLoading) return <span>Loading...</span>;

  if (isError) return <span>에러가 발생했습니다: {error.message}</span>;

  return <p>{data}</p>;
}
