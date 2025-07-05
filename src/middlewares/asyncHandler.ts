import { Request, Response, NextFunction, RequestHandler } from 'express';

/**
 * Wraps an async route handler to catch errors and pass them to Express' error handler.
 *
 * @param fn - The async Express route handler function
 * @returns A function that handles any uncaught errors in the async function
 */
export const asyncHandler = (
    fn: (req: Request, res: Response, next: NextFunction) => Promise<unknown>
): RequestHandler => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};
