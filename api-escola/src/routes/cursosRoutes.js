import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.json([
    { id: 1, nome: 'Informática para Internet' },
    { id: 2, nome: 'Redes de Computadores' }
  ]);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id: Number(id), nome: 'Curso Exemplo' });
});

router.post('/', (req, res) => {
  const { nome } = req.body;
  res.status(201).json({ id: 3, nome });
});

export default router;