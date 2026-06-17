import db from "../config/db.js";

export const createNote = async (userId, title, content) => {
  const result = await db.query(
    `insert into notes(user_id,title,content) values($1,$2,$3) returning *`,
    [userId, title, content],
  );
  return result.rows[0];
};
export const getAllNotes = async (userId) => {
  const result = await db.query(
    `select * from notes where user_id = $1 order by created_at desc`,
    [userId],
  );
  return result.rows;
};
export const getNoteById = async (userId, noteId) => {
  const result = await db.query(
    `select * from notes where id=$1 and user_id = $2`,
    [noteId, userId],
  );
  return result.rows[0];
};
export const updateNote = async (userId, noteId, title, content) => {
  const result = await db.query(
    `update notes set title = $1, content = $2, updated_at = now() where id = $3 and user_id = $4 returning *`,
    [title, content, noteId, userId],
  );
  return result.rows[0];
};
export const deleteNote = async (userId, noteId) => {
  await db.query(
    `delete from notes where id = $1 and user_id = $2 returning *`,
    [noteId, userId],
  );
};
