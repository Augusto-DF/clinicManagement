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
            ${data?.isEmployee ? "@is_employee" : "false"},
            CURRENT_TIMESTAMP,
            CURRENT_TIMESTAMP
        )
    `;
  const stmt = db.prepare(query);

  stmt.run(data);
};

export const getUserByLogin = async (data) => {
  const query = `
    SELECT * FROM users 
      WHERE (username='${data.username}' OR email='${data.username}') AND (password='${data.password}')
  `;

  const res = db.prepare(query).get();

  return (await res?.id) ? res : { message: "The user does not exists" };
};
