import { Request, Response, Router } from 'express';

const router = Router();

// Home Route
router.get('/', (_req: Request, res: Response) => {
    res.status(200).json({ success: true, message: "Welcome to dua backend!", });
});

export default router;
