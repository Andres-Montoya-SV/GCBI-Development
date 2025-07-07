import { Router } from 'express';
import { LogController } from '@/controllers/logs/Log.controller';
import { asyncHandler } from '@/middlewares/asyncHandler';

/**
 * @module routes/v1/logs
 * @description
 * Handles access to application logs for auditing or debugging purposes.
 */

const router = Router();

/**
 * @openapi
 * /v1/logs:
 *   get:
 *     tags:
 *       - Logs
 *     summary: Retrieve all logs
 *     description: Returns a list of logged requests and activities. Requires admin privileges.
 *     responses:
 *       200:
 *         description: List of logs returned successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "log_123"
 *                   endpoint:
 *                     type: string
 *                     example: "/v1/leads"
 *                   method:
 *                     type: string
 *                     example: "POST"
 *                   status_code:
 *                     type: number
 *                     example: 201
 *                   timestamp:
 *                     type: string
 *                     format: date-time
 *                   user_id:
 *                     type: string
 *                     nullable: true
 *                     example: "user_456"
 *       500:
 *         description: Failed to fetch logs
 */
router.get('/', asyncHandler(LogController.getAllLogs));

export default router;
