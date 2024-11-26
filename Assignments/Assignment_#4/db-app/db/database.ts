import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("db_app.db");

export const initializeDatabase = (): void => {
    db.execSync( 
        `CREATE TABLE IF NOT EXISTS Users (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         name TEXT NOT NULL,
         email TEXT NOT NULL
        );`
    )
};

export default db;
