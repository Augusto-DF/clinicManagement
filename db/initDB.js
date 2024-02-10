const { User } = require("../app/api/models/User/user.js");
const { Employee } = require("../app/api/models/Employee/employee.js");
const { populateDB } = require("./initialPopulating/utils.js");
const sql = require("better-sqlite3");
const {
  empPopulate: { INITIAL_EMPLOYEES, empQuery },
} = require("./initialPopulating/populateEmployeeTable.js");

const db = sql("clinic_management.db");

db.prepare(User.createUserTable()).run();
db.prepare(Employee.createEmployeeTable()).run();

populateDB(db);
populateDB(db, INITIAL_EMPLOYEES, empQuery);
