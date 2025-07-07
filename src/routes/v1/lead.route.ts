import { Router } from 'express';
import { LeadController } from '../../controllers/lead/Lead.controller';
import { asyncHandler } from '@/middlewares/asyncHandler';

/**
 * @module routes/v1/leads
 * @description
 * Handles all lead-related operations:
 *
 * - `POST /v1/leads` – Create a new lead.
 * - `GET /v1/leads` – List all leads.
 */

const router = Router();

/**
 * @openapi
 * /v1/leads:
 *   post:
 *     tags:
 *       - Leads
 *     summary: Create a new lead
 *     description: Stores a new lead received from a form or external integration.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - full_name
 *               - email
 *             properties:
 *               full_name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 format: email
 *                 example: john.doe@example.com
 *               phone:
 *                 type: string
 *                 example: +123456789
 *               source:
 *                 type: string
 *                 example: website
 *     responses:
 *       201:
 *         description: Lead created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */
router.post('/', asyncHandler(LeadController.create));

/**
 * @openapi
 * /v1/leads:
 *   get:
 *     tags:
 *       - Leads
 *     summary: Get all leads
 *     description: Returns a list of all stored leads from the database.
 *     responses:
 *       200:
 *         description: A list of leads
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   full_name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   phone:
 *                     type: string
 *                   source:
 *                     type: string
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Failed to retrieve leads
 */
router.get('/', asyncHandler(LeadController.findAll));

export default router;
