"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = __importDefault(require("../db/db"));
const router = (0, express_1.Router)();
// Get all duas
router.get('/', (_req, res) => {
    const data = db_1.default.prepare('SELECT * FROM dua').all();
    res.status(200).json({ success: true, message: "Fetched all duas", data });
});
// Get all duas by id and subcat id
router.get('/:cat_id/:subcat_id', (req, res) => {
    const { cat_id, subcat_id } = req.params;
    const data = db_1.default.prepare(`SELECT * FROM dua WHERE cat_id=${cat_id} AND subcat_id=${subcat_id}`).all();
    res.status(200).json({ success: true, message: "Fetched all duas by cat_id and subcat_id", data });
});
// Get all duas by id
router.get('/:cat_id', (req, res) => {
    const { cat_id } = req.params;
    const data = db_1.default.prepare(`SELECT * FROM dua WHERE cat_id=${cat_id}`).all();
    res.status(200).json({ success: true, message: "Fetched all duas by ID", data });
});
exports.default = router;
