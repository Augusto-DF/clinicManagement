class User {
  constructor(name, username, password) {
    this.name = name;
    this.username = username;
    this.password = password;
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
}

exports.User = User;
