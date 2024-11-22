import { Router } from 'express';
import openDb from '../db/db';
const router = Router();
// Get all categories
router.get('/', async (_req, res) => {
    try {
        const db = await openDb();
        const categories = await db.all('SELECT * FROM category');
        res.json(categories);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
export default router;
