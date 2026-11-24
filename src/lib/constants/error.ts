// Auth
export const AUTH_ERRORS = {
  INVALID_CREDENTIALS: "Invalid credentials. Please try again.",
  INVALID_PHONE: "Please enter a valid phone number.",
  SESSION_EXPIRED: "Your session has expired. Please log in again.",
  UNAUTHORIZED: "You are not authorized to perform this action.",
  FORBIDDEN: "Access denied.",
  ACCOUNT_LOCKED: "Your account has been locked. Contact support.",
  EMAIL_ALREADY_EXISTS: "An account with this email already exists.",
} as const;

// API
export const API_ERRORS = {
  NETWORK_ERROR: "Network error. Please check your connection.",
  TIMEOUT: "Request timed out. Please try again.",
  SERVER_ERROR: "Something went wrong on our end. Please try again later.",
  NOT_FOUND: "The requested resource was not found.",
  BAD_REQUEST: "Invalid request. Please check your input.",
  RATE_LIMITED: "Too many requests. Please slow down.",
  SERVICE_UNAVAILABLE: "Service temporarily unavailable.",
  UNKNOWN: "An unexpected error occurred.",
} as const;

// DB
export const DB_ERRORS = {
  CONNECTION_FAILED: "Unable to connect to the database. Please try again.",
  CONNECTION_TIMEOUT: "Database connection timed out. Please try again.",
  CONNECTION_POOL_EXHAUSTED: "Database is busy. Please try again shortly.",
  QUERY_FAILED: "A database error occurred. Please try again.",
  QUERY_TIMEOUT: "The database query timed out. Please try again.",
  UNIQUE_VIOLATION: "A record with this value already exists.",
  FOREIGN_KEY_VIOLATION: "Related record not found or still in use.",
  NOT_NULL_VIOLATION: "A required field is missing.",
  CHECK_VIOLATION: "The provided value does not meet the required constraints.",
  DEADLOCK: "A database conflict occurred. Please retry your request.",
  SERIALIZATION_FAILURE:
    "A database conflict occurred. Please retry your request.",
  RECORD_NOT_FOUND: "The requested record was not found.",
  DUPLICATE_KEY: "A duplicate entry was detected.",
  TRANSACTION_FAILED:
    "The transaction could not be completed. Please try again.",
  MIGRATION_FAILED: "Database migration failed. Contact support.",
  CONSTRAINT_VIOLATION: "The operation violates a database constraint.",
  UNKNOWN: "An unexpected database error occurred.",
} as const;

// Env
export const ENV_ERRORS = {
  MISSING_REQUIRED: "A required environment variable is not set.",
} as const;

export type AuthError = (typeof AUTH_ERRORS)[keyof typeof AUTH_ERRORS];
export type ApiError = (typeof API_ERRORS)[keyof typeof API_ERRORS];
export type DbError = (typeof DB_ERRORS)[keyof typeof DB_ERRORS];
export type EnvError = (typeof ENV_ERRORS)[keyof typeof ENV_ERRORS];
