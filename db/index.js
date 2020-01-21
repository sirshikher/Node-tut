const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  database: "postgres",
  password: "shikher",
  port: "5433",
  host: "localhost"
  // connectionString:"postgresql://localhost/fishes-app"
});
client.connect();

module.exports = client;
