import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.resolve(__dirname, '../../public/dua_main.sqlite');
const db = new Database(dbPath, { verbose: console.log });

console.log('Connected to the SQLite database.');

export default db;