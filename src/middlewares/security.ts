import rateLimit from 'express-rate-limit';
import cors from 'cors';
import helmet from 'helmet';
import { Application } from 'express';
import logger from '../utils/logger';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';

/**
 * Applies security-related middleware to the app:
 * - Helmet with CSP & HSTS
 * - CORS with whitelist
 * - Rate limiting
 *
 * @param app Express application
 */
export function applySecurityMiddleware(app: Application): void {
    logger.info('Security started');
    // Rate limiting
    app.use(
        rateLimit({
            windowMs: 15 * 60 * 1000,
            max: 100,
            message: 'Too many requests, try again later.',
        })
    );

    // CORS config
    app.use(
        cors({
            origin: ['http://localhost:1989/api'],
            credentials: true,
        })
    );

    // Helmet config
    app.use(
        helmet({
            contentSecurityPolicy: {
                directives: {
                    defaultSrc: ["'self'"],
                    scriptSrc: ["'self'", "'unsafe-inline'"],
                    objectSrc: ["'none'"],
                },
            },
            referrerPolicy: { policy: 'no-referrer' },
            hsts: {
                maxAge: 31536000,
                includeSubDomains: true,
                preload: true,
            },
        })
    );

    // Removing the Powered By header
    app.use(helmet.hidePoweredBy());

    // MPreventing XSS attacks
    app.use(xss());

    // Preventing NoSQL Injections
    app.use(mongoSanitize()); // Previene NoSQL Injection
}
