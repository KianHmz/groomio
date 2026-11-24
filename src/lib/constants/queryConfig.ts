const SEC = 1000;
const MIN = 60 * SEC;

export const QUERY_CONFIG = {
  STALE_TIME: 1 * MIN,
  RETRY: 1,
  GC_TIME: 5 * MIN,
} as const;
