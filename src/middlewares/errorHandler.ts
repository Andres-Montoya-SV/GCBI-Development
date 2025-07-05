import { Request, Response } from 'express';
import logger from '../utils/logger';

/**
 * Centralized Express error-handling middleware.
 *
 * Logs the error and returns a standardized JSON response to the client.
 * In production, hides stack traces from client output.
 *
 * @param err - The error thrown in the application
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function (unused here but required by Express)
 */
export function errorHandler(err: unknown, req: Request, res: Response): void {
    // Log full error
    logger.error(`[${req.method}] ${req.url} - ${String(err)}`);

    // Default values
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    const message = err instanceof Error ? err.message : 'Something went wrong';

    const responseBody = {
        success: false,
        message,
        ...(process.env.NODE_ENV !== 'production' && {
            stack: err instanceof Error ? err.stack : undefined,
        }),
    };

    res.status(statusCode).json(responseBody);
}
