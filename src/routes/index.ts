import { Router } from 'express';
import v1Routers from './v1'; // Asegúrate de que el archivo tenga `.ts` o esté en `tsconfig.json > include`

/**
 * Main router entry point for API versioning.
 *
 * - Mounts all v1 routes under `/v1`
 *
 * @module routes/index
 * @returns {Router} Express router with mounted versions
 */
const router: Router = Router();

router.use('/v1', v1Routers);

export default router;
