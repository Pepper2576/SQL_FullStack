import mysql from 'mysql2';
import 'dotenv/config.js';

const pool = mysql
  .createPool({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER_NAME,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DB,
  })
  .promise();

async function getAllEmployees() {
  const [rows] = await pool.query('SELECT * FROM employees');
  return rows;
}

async function getEmployeeByID(id) {
  const [employee] = await pool.query(`SELECT * From employees WHERE id = ?`, [
    id,
  ]);
  return employee[0];
}

async function createEmployee(id, firstName, lastName, adminRights) {
  const newEmployee = await pool.query(
    `
    INSERT INTO employees (id, first_name, last_name, admin_rights) VALUES(?, ?, ?, ?)
    `,
    [id, firstName, lastName, adminRights]
  );
  return newEmployee;
}

async function updateEmployee(columnName, newValue, id) {
  const update = await pool.query(`UPDATE employees SET ?? = ? where id = ?`, [
    columnName,
    newValue,
    id,
  ]);
  return update;
}

async function deleteEmployee(id) {
  await pool.query(`DELETE FROM employees WHERE id = ?`, [id]);
}

export {
  getAllEmployees,
  getEmployeeByID,
  createEmployee,
  deleteEmployee,
  updateEmployee,
};
