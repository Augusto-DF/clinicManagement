const { User } = require("../app/api/models/User/user.js");
const { populateDB } = require("./initialPopulating/utils.js");
const sql = require("better-sqlite3");

const db = sql("clinic_management.db");

db.prepare(User.createUserTable()).run();

populateDB(db);
