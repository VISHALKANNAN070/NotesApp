import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

const db =
  process.env.DEPLOYMENT_TYPE === "production"
    ? new Pool({
        connectionString: process.env.DB_URL,
        ssl: {
          rejectUnauthorized: false,
        },
      })
    : new Pool({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
      });

try {
  await db.query("SELECT 1");
  console.log("Database Connected");
} catch (err) {
  console.error("Database connection failed : ", err);
  process.exit(1);
}

db.on("error", (err) => {
  console.error("Unexpected database pool error:", err);
  process.exit(1);
});
export default db;
