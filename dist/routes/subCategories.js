"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = __importDefault(require("../db/db"));
const router = (0, express_1.Router)();
// Get all sub-categories
router.get('/', (_req, res) => {
    const data = db_1.default.prepare('SELECT * FROM sub_category').all();
    res.status(200).json({ success: true, message: "Fetched all sub-categories", data });
});
// Get sub-categories by id
router.get('/:cat_id', (req, res) => {
    const { cat_id } = req.params;
    const data = db_1.default.prepare(`SELECT * FROM sub_category WHERE cat_id=${cat_id}`).all();
    res.status(200).json({ success: true, message: "Fetched subcategories by id", data });
});
exports.default = router;
