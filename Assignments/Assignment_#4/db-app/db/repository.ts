import db from "./database";

export interface User {
  id?: number;
  name: string;
  email: string;
}

export const insertUser = (user: User): void => {
    const res = db.runSync(
     "INSERT INTO Users (name, email) VALUES (?, ?);",
     user.name,
     user.email
    )
    console.log(res.lastInsertRowId, res.changes);
};

export const fetchUsers = (): User[] => {
    const allRows = db.getAllSync<User>("SELECT * FROM Users");
    console.log("All rows");
    for (const row of allRows) {
        console.log(row?.id, row.email, row.name);
    }
    return allRows;
};

export const deleteUser = (id: number): void => {
    db.runSync(
        'DELETE FROM Users WHERE id = $value',
        { $value: id }
    );
};

export const updateUser = (user: User): void => {
    db.runAsync(
        'UPDATE Users SET name = ?, email = ? WHERE id = ?',
        [user.name, user.email, user.id as number]
    );
};