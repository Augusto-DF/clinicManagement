class Appointment {
  contructor(userId, employeeId, scheduleDate, description) {
    this.userId = userId;
    this.employeeId = employeeId;
    this.scheduleDate = scheduleDate;
    this.description = description;
  }

  static createAppointmentTable() {
    return `
        CREATE TABLE IF NOT EXISTS appointments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            userId INTEGER NOT NULL,
            employeeId INTEGER NOT NULL,
            scheduleDate TIMESTAMP NOT NULL,
            description TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (userId) REFERENCES users(id) ON UPDATE CASCADE,
            FOREIGN KEY (employeeId) REFERENCES employees(id) ON UPDATE CASCADE
        )
    `;
  }

  getAppointment() {
    const { ...appointment } = this;
    return appointment;
  }
}

exports.Appointment = Appointment;
