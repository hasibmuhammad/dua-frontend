"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = __importDefault(require("../db/db"));
const router = (0, express_1.Router)();
// Get all categories
router.get('/', (_req, res) => {
    const data = db_1.default.prepare('SELECT * FROM category').all();
    res.status(200).json({ success: true, message: "Fetched all categories", data });
});
exports.default = router;
