import express from 'express'
import { getUsuario } from '../controllers/usuarioController.js';

const router = express.Router();

router.get( '/',  getUsuario);

export default router;