import sql from "better-sqlite3";

const db = sql("clinic_management.db");

export const authUser = async (data) => {
  const query = `
      SELECT * FROM users 
        WHERE (username=@username OR email=@username) AND (password=@password) 
    `;

  const res = db.prepare(query).get(data);

  return res;
};
