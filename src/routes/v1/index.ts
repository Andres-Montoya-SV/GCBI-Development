import { Router } from 'express';
import { InfoController } from '../../controllers';
import { asyncHandler } from '../../middlewares/asyncHandler';

/**
 * Router for handling public information endpoints.
 *
 * - `GET /info`: Returns general information about the API or system.
 *
 * @module routes/v1/info
 * @returns {Router} Express router with /info route
 */

/**
 * @openapi
 * /v1/info:
 *   get:
 *     tags:
 *       - Info
 *     summary: Get general information about the API
 *     responses:
 *       200:
 *         description: OK
 */
const router: Router = Router();

router.get('/info', asyncHandler(InfoController.information));

/**
 * @openapi
 * /v1/health:
 *   get:
 *     tags:
 *       - Health
 *     summary: Health check
 *     responses:
 *       200:
 *         description: Returns the health status and timestamp
 */
router.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

export default router;
