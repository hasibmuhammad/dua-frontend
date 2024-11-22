"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const better_sqlite3_1 = __importDefault(require("better-sqlite3"));
const path_1 = __importDefault(require("path"));
const dbPath = path_1.default.resolve(__dirname, '../../public/dua_main.sqlite');
const db = new better_sqlite3_1.default(dbPath, { verbose: console.log });
console.log('Connected to the SQLite database.');
exports.default = db;
