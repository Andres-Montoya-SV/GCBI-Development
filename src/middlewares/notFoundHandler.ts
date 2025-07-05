import { Request, Response } from 'express';
import logger from '../utils/logger';
/**
 * Middleware to handle 404 Not Found routes.
 *
 * Sends a custom JSON response for any unmatched route.
 */
export function notFoundHandler(req: Request, res: Response): void {
    logger.error(`"Not Found", status: 404, method: ${req.method}, path: ${req.originalUrl}`);

    res.status(404).json({
        error: 'Not Found',
        status: 404,
        method: req.method,
        path: req.originalUrl,
    });
}
