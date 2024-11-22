import { Request, Response, Router } from 'express';
import db from '../db/db';

const router = Router();

// Get all categories
router.get('/', (_req: Request, res: Response) => {
    const data = db.prepare('SELECT * FROM category').all()
    res.status(200).json({ success: true, message: "Fetched all categories", data });
});

export default router;
