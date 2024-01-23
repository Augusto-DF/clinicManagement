const INITIAL_USERS = [
  {
    name: "Augusto",
    username: "Jack the Crab",
    email: "crabnation@gmail.com",
    password: "clapclapCRAB!",
  },
];

const populateQuery = `
  INSERT INTO users VALUES (
    null,
    @name,
    @username,
    @email,
    @password,
    true,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  )
`;

const populateDB = async (db, data = INITIAL_USERS, query = populateQuery) => {
  const stmt = db.prepare(query);

  for (const user of data) {
    stmt.run(user);
  }
};

exports.populateDB = populateDB;
