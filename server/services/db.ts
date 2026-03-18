import postgres, { Sql } from "postgres";

import dotenv from "dotenv";
dotenv.config();

const SB_POSTGRES_URL: string =
  process.env.POSTGRES_URL ||
  "postgresql://postgres:postgres@127.0.0.1:54322/postgres";
const sql: Sql = postgres(SB_POSTGRES_URL);
console.log("Connected to PostgreSQL database");

export default sql;
