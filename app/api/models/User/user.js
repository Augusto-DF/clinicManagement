class User {
  constructor({ ...params }) {
    for (const [key, value] of Object.entries(params)) {
      if (key !== "password") {
        this[key] = value;
      }
    }
  }

  static createUserTable() {
    return ` 
          CREATE TABLE IF NOT EXISTS users (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT NOT NULL,
              username TEXT NOT NULL UNIQUE,
              email TEXT NOT NULL UNIQUE,
              password TEXT NOT NULL,
              is_employee BOOLEAN DEFAULT false,
              created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
              updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          )
      `;
  }

  getUser() {
    const { ...user } = this;
    return user;
  }
}

exports.User = User;
