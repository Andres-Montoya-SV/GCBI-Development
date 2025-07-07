import { Router } from 'express';
import { SyncController } from '../../controllers/sync/Sync.controller';
import { asyncHandler } from '../../middlewares/asyncHandler';

/**
 * @module routes/v1/sync
 * @description
 * Routes for syncing data to external platforms such as Zoho CRM.
 */

const router = Router();

/**
 * @openapi
 * /v1/sync/zoho:
 *   post:
 *     tags:
 *       - Sync
 *     summary: Push data to Zoho CRM
 *     description: Manually trigger synchronization of leads or other data to Zoho CRM.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               leadId:
 *                 type: string
 *                 description: The ID of the lead to sync
 *                 example: "lead_abc123"
 *     responses:
 *       200:
 *         description: Data synced successfully
 *       400:
 *         description: Bad request or missing fields
 *       500:
 *         description: Internal server error or external API failure
 */
router.post('/zoho', asyncHandler(SyncController.pushToZoho));

export default router;
