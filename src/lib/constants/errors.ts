export const ERRORS = {
  // Auth
  UNAUTHORIZED: "Authentication required",
  FORBIDDEN: "Access denied",
  INVALID_CREDENTIALS: "Invalid email or password",
  TOKEN_EXPIRED: "Session expired, please log in again",

  // Validation
  VALIDATION_ERROR: "Validation failed",
  INVALID_INPUT: "Invalid input",
  INVALID_PHONE: "Invalid phone number",
  INVALID_COUNTRY_CODE: "Invalid country code",

  // Resources
  NOT_FOUND: "Resource not found",
  ALREADY_EXISTS: "Resource already exists",
  CONFLICT: "Request conflicts with current state",

  // Server
  INTERNAL_ERROR: "Something went wrong",
  SERVICE_UNAVAILABLE: "Service temporarily unavailable",
  TIMEOUT: "Request timed out",

  // Rate limiting
  TOO_MANY_REQUESTS: "Too many requests, please slow down",

  // Environment variables
  MISSING_ENV_VAR: "Missing environment variable(s)",

  // Database
  DB_RECORD_ALREADY_EXISTS: "Record already exists",
  DB_RECORD_NOT_FOUND: "Record not found in database",
  DB_INSERT_FAILED: "Failed to insert record",
  DB_UPDATE_FAILED: "Failed to update record",
  DB_DELETE_FAILED: "Failed to delete record",
} as const;

export type ErrorMessage = (typeof ERRORS)[keyof typeof ERRORS];
