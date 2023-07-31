import { Users } from "../models/user";

import pool from "../db/connect";

export const createUser = async (user: Users) => {
    const { rows } = await pool.query<Users>(
        `INSERT INTO users (name, describtion) VALUES ($1, $2) RETURNING *`,
        [user.name, user.describtion]
    );
    return rows[0];
}

export const updateUser = async (user: Users) => {
    const { rows } = await pool.query<Users>(
        `UPDATE users SET name = $1, describtion = $2 WHERE id = $3 RETURNING *`,
        [user.name, user.describtion, user.id]
    );
    return rows.length ? rows[0] : null;
}

export const getUsers = async () => {
    const { rows } = await pool.query<Users>(`SELECT * FROM users`);
    return rows;
}

export const getUser = async (id: Users["id"]) => {
    const { rows } = await pool.query<Users>(`SELECT * FROM users WHERE id = $1`, [id]);
    return rows.length ? rows[0] : null;
}

export const deleteUser = async (id: Users["id"]) => {
    const { rows } = await pool.query<Users>(
        `DELETE FROM users WHERE id = $1 RETURNING *`,
        [id]
    );
    return rows.length ? rows[0] : null;
}