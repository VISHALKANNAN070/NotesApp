import db from "../config/db.js";

export const findUserByEmail = async (email) => {
  const result = await db.query(`select * from users where email = $1 `, [
    email,
  ]);
  return result.rows[0];
};

export const findUserByUserId = async (userId) => {
  const result = await db.query(`select * from users where id = $1`, [userId]);
  return result.rows[0];
};

export const createUser = async (name, email, passwordHash) => {
  const result = await db.query(
    `insert into users(name,email,password_hash) values($1,$2,$3) returning *`,
    [name, email, passwordHash],
  );
  return result.rows[0];
};

export const deleteUser = async (userId) => {
  const result = await db.query(
    `delete from users where id = $1 returning *`,[userId]
  )
}