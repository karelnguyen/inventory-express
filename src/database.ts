import { Client } from "pg";

export const client = new Client({
  host: process.env.DB_HOST || process.env.POSTGRESDB_HOST,
  user: process.env.DB_USER || process.env.POSTGRESDB_USER,
  password: process.env.DB_PASSWORD || process.env.POSTGRESDB_PASSWORD,
  database: process.env.DB_NAME || process.env.POSTGRESDB_DATABASE,
  port: parseInt(
    process.env.DB_PORT || process.env.POSTGRESDB_LOCAL_PORT || "5432"
  ),
});
