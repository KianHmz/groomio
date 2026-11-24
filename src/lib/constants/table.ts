export const TABLES = {
  appointments: "appointments",
} as const;

export type TableName = (typeof TABLES)[keyof typeof TABLES];
