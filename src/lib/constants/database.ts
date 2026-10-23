
export const DATABASE = {
  // Connection
  CONNECTION_SUCCESS: "Database connection established successfully.",
  CONNECTION_FAILED: "Failed to connect to the database.",
  CONNECTION_LOST: "Database connection lost.",
  CONNECTION_TIMEOUT: "Database connection timed out.",
  CONNECTION_CLOSED: "Database connection closed.",

  // Queries
  QUERY_SUCCESS: "Query executed successfully.",
  QUERY_FAILED: "Query execution failed.",
  QUERY_TIMEOUT: "Query execution timed out.",
  QUERY_EMPTY_RESULT: "No records found.",

  // CRUD
  CREATE_SUCCESS: "Record created successfully.",
  CREATE_FAILED: "Failed to create record.",
  READ_SUCCESS: "Record retrieved successfully.",
  READ_FAILED: "Failed to retrieve record.",
  UPDATE_SUCCESS: "Record updated successfully.",
  UPDATE_FAILED: "Failed to update record.",
  DELETE_SUCCESS: "Record deleted successfully.",
  DELETE_FAILED: "Failed to delete record.",
  NOT_FOUND: "Record not found.",

  // Constraints / validation
  DUPLICATE_ENTRY: "A record with this value already exists.",
  FOREIGN_KEY_VIOLATION: "Related record does not exist.",
  NOT_NULL_VIOLATION: "Required field cannot be empty.",
  UNIQUE_VIOLATION: "Value must be unique.",
  VALIDATION_FAILED: "Data validation failed.",

  // Transactions
  TRANSACTION_STARTED: "Transaction started.",
  TRANSACTION_COMMITTED: "Transaction committed successfully.",
  TRANSACTION_ROLLED_BACK: "Transaction rolled back.",
  TRANSACTION_FAILED: "Transaction failed.",

  // Migration / schema
  MIGRATION_SUCCESS: "Migration applied successfully.",
  MIGRATION_FAILED: "Migration failed.",
  SEED_SUCCESS: "Seeding completed successfully.",
  SEED_FAILED: "Seeding failed.",

  // General errors
  UNKNOWN_ERROR: "An unknown database error occurred.",
  PERMISSION_DENIED: "Insufficient database permissions.",
  DEADLOCK: "Deadlock detected. Please retry.",
} as const;

export type Database = keyof typeof DATABASE;
