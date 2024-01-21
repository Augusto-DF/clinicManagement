"use server";
import sql from "better-sqlite3";

const db = sql("clinic_management.db");

export const getUsers = async () => {
  const query = `
        SELECT * FROM users
    `;

  const res = db.prepare(query).all();

  return res;
};

export const createUser = async (data) => {
  const query = `
        INSERT INTO users VALUES (
            null,
            @name,
            @username,
            @email,
            @password,
            CURRENT_TIMESTAMP,
            CURRENT_TIMESTAMP
        )
    `;
  const stmt = db.prepare(query);

  stmt.run(data);
};
