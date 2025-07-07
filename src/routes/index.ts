import { Router } from 'express';
import v1Routers from './v1';
import syncRouter from './v1/sync.route';
import logsRouter from './v1/logs.route';
import leadsRouter from './v1/lead.route';
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
router.use('/sync', syncRouter);
router.use('/logs', logsRouter);
router.use('/leads', leadsRouter);

export default router;
