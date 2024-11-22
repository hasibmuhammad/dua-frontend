"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Home Route
router.get('/', (_req, res) => {
    res.status(200).json({ success: true, message: "Welcome to dua backend!", });
});
exports.default = router;
