import { Router } from 'express';
import { cotizacionController } from '../controllers/cotizacion.controller';
const router = Router();


router.post('/cotizar', cotizacionController.calcularPrecio);




export default router;