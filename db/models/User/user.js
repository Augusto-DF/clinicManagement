class User {
  constructor(name, username, password) {
    this.name = name;
    this.username = username;
    this.password = password;
  }

  static getQuery() {
    return ` 
          CREATE TABLE IF NOT EXISTS users (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT NOT NULL,
              username TEXT NOT NULL,
              email TEXT NOT NULL UNIQUE,
              password TEXT NOT NULL,
              created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
              updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          )
      `;
  }
}

exports.User = User;
