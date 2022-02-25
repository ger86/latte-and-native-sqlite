import {enablePromise, openDatabase} from 'react-native-sqlite-storage';

const dbName = 'task.db';
const tableName = 'task';

enablePromise(true);

export async function getDbConnection() {
  return openDatabase({name: dbName, location: 'default'});
}

export async function createTable(db) {
  const query = `CREATE TABLE IF NOT EXISTS 
      ${tableName}(id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(512))`;

  await db.executeSql(query);
}

export async function initDatabase() {
  const db = await getDbConnection();
  createTable(db);
}

export async function getTasks() {
  const tasks = [];
  const db = await getDbConnection();
  const results = await db.executeSql(`SELECT id, title FROM ${tableName}`);
  results.forEach(function (result) {
    for (let index = 0; index < result.rows.length; index++) {
      tasks.push(result.rows.item(index));
    }
  });
  return tasks;
}

export async function getTask(id) {
  let task = null;
  const db = await getDbConnection();
  const results = await db.executeSql(`SELECT id, title FROM ${tableName} WHERE id = ${id}`);
  results.forEach(function (result) {
    for (let index = 0; index < result.rows.length; index++) {
      task = result.rows.item(index);
    }
  });
  return task;
}

export async function insertTask(title) {
  const insertQuery = `INSERT INTO ${tableName} (title) values ('${title}')`;
  const db = await getDbConnection();
  return db.executeSql(insertQuery);
}

export async function updateTask(id, title) {
  const insertQuery = `UPDATE ${tableName} SET title = '${title}' WHERE id = ${id}`;
  const db = await getDbConnection();
  return db.executeSql(insertQuery);
}

export async function deleteTask(taskId) {
  const db = await getDbConnection();
  const deleteQuery = `DELETE from ${tableName} where id = ${taskId}`;
  await db.executeSql(deleteQuery);
}

export async function deleteTable() {
  const db = await getDbConnection();
  const query = `drop table ${tableName}`;
  await db.executeSql(query);
}
