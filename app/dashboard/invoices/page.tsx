'use client';

import { useQuery } from "@tanstack/react-query";

const getTodos = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  return res.json();
};

export default function Page() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"], // 이 쿼리의 고유 키
    queryFn: getTodos, // 데이터를 가져올 함수
  });

  if (isLoading) return "로딩 중...";
  if (error) return "에러 발생: " + error.message;

  return <p>{data}</p>;
}
