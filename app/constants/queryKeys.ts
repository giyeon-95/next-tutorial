export const pokemonKeys = {
  all: ["todos"] as const, // 쿼리 키의 최상위 루트
  lists: () => [...pokemonKeys.all, "list"] as const, // 목록 전체
  list: (filters: string) => [...pokemonKeys.lists(), { filters }] as const, // 필터링된 목록
  details: () => [...pokemonKeys.all, "detail"] as const, // 상세 정보 전체
  detail: (id: number) => [...pokemonKeys.details(), id] as const, // 특정 상세 정보
};
