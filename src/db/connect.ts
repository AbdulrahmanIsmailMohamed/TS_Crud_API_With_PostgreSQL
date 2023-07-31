import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.DB_USER,
    host: 'localhost',
    database: process.env.DB_NAME,
    password: "2233445566",
    port: 5432 // Change this if your PostgreSQL runs on a different port
});

export default pool;