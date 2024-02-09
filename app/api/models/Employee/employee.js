class Employee {
  constructor(userId, specialty) {
    this.userId = userId;
    this.specialty = specialty;
  }

  static createEmployeeTable() {
    return `
        CREATE TABLE IF NOT EXISTS employee (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            userId INTEGER NOT NULL,
            specialty TEXT NOT NULL,
            CONSTRAINT fk_users
                FOREIGN KEY (userId)
                REFERENCES users(id)
        )
    `;
  }

  getEmployee() {
    const { ...employee } = this;
    return employee;
  }
}

exports.Employee = Employee;
