import pool from "../db/connect";

export interface Users {
    id?: number,
    name: string,
    describtion: string
}