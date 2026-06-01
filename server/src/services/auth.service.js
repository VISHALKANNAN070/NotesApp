import db from "../config/db.js";

export const findUserByEmail = async (email) => {
  const result = await db.query(`select * from users where email = $1`, [
    email,
  ]);
  return result.rows[0];
};

export const createUser = async (username, email, passwordHash) => {
  const result = await db.query(
    `insert into users(username,email,password_hash) values($1,$2,$3)`,
    [username, email, passwordHash],
  );
  return result.rows[0];
};
  