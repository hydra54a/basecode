import { Knex } from "knex";
import cfg from "../config/cfg";

module.exports = {
  client: "pg",
  connection: cfg.pg_connection,
  migrations: {
    directory: "./migrations",
  },
  seeds: {
    directory: "./seeds",
  },
} as Knex.Config;