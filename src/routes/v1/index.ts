import { Router, Request, Response } from 'express';
import { InfoController } from '../../controllers';
import { asyncHandler } from '../../middlewares/asyncHandler';

/**
 * @module routes/v1/info
 * @description
 * Handles public endpoints related to general API information and health check.
 *
 * - `GET /v1/info` – Returns general API metadata.
 * - `GET /v1/health` – Verifies service health and uptime.
 */

const router: Router = Router();

/**
 * @openapi
 * /v1/info:
 *   get:
 *     tags:
 *       - Info
 *     summary: Get general information about the API
 *     description: Returns metadata about the API version, environment, and status.
 *     responses:
 *       200:
 *         description: API information retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 version:
 *                   type: string
 *                   example: "1.0.0"
 *                 status:
 *                   type: string
 *                   example: "running"
 */
router.get('/info', asyncHandler(InfoController.information));

/**
 * @openapi
 * /v1/health:
 *   get:
 *     tags:
 *       - Health
 *     summary: Health check
 *     description: Verifies that the API is up and responding to requests.
 *     responses:
 *       200:
 *         description: Returns the health status and timestamp
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                   example: 2025-07-07T18:24:53.173Z
 */
router.get('/health', (_req: Request, res: Response) => {
    res.status(200).json({
        status: 'ok',
        timestamp: new Date().toISOString(),
    });
});

export default router;
