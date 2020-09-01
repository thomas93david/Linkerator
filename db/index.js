// Connect to DB
const { Client } = require("pg");
const DB_NAME = "Linkerator";
const DB_URL =
  process.env.DATABASE_URL || `postgres://localhost:5432/${DB_NAME}`;
const client = new Client(DB_URL);

// database methods
// future methods

// export
module.exports = {
  client,
  // db methods
};