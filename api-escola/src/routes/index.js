import { Router } from 'express';
import cursosRoutes from './cursosRoutes.js';

const router = Router();
router.get('/health', (req, res) => {
  res.json({ status: 'ok', at: new Date().toISOString() });
});
router.use('/cursos', cursosRoutes);
export default router;