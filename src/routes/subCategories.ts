import { Request, Response, Router } from 'express';
import db from '../db/db';

const router = Router();

// Get all sub-categories
router.get('/', (_req: Request, res: Response) => {
    const data = db.prepare('SELECT * FROM sub_category').all()
    res.status(200).json({ success: true, message: "Fetched all sub-categories", data });
});

// Get sub-categories by id
router.get('/:cat_id', (req: Request, res: Response) => {
    const { cat_id } = req.params;
    const data = db.prepare(`SELECT * FROM sub_category WHERE cat_id=${cat_id}`).all()
    res.status(200).json({ success: true, message: "Fetched subcategories by id", data });
});

export default router;
