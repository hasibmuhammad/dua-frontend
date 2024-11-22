import { Request, Response, Router } from 'express';
import db from '../db/db';

const router = Router();

// Get all duas
router.get('/', (_req: Request, res: Response) => {
    const data = db.prepare('SELECT * FROM dua').all()
    res.status(200).json({ success: true, message: "Fetched all duas", data });
});

// Get all duas by id and subcat id
router.get('/:cat_id/:subcat_id', (req: Request, res: Response) => {
    const { cat_id, subcat_id } = req.params;
    const data = db.prepare(`SELECT * FROM dua WHERE cat_id=${cat_id} AND subcat_id=${subcat_id}`).all()
    res.status(200).json({ success: true, message: "Fetched all duas by cat_id and subcat_id", data });
});

// Get all duas by id
router.get('/:cat_id', (req: Request, res: Response) => {
    const { cat_id } = req.params;
    const data = db.prepare(`SELECT * FROM dua WHERE cat_id=${cat_id}`).all()
    res.status(200).json({ success: true, message: "Fetched all duas by ID", data });
});

export default router;
