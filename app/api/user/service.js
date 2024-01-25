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

  try {
    const stmt = db.prepare(query);

    stmt.run(data);

    return { message: "User created", OK: true };
  } catch (err) {
    return { message: err, OK: false };
  }
};
