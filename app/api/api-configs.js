import sql from "better-sqlite3";

export const API_HOST = "http://localhost:3000";

export const DEFAULT_HEADERS = {
  headers: {
    "Content-Type": "application/json",
  },
};

const DB_NAME = "clinic_management.db";

export const db = sql(DB_NAME);
