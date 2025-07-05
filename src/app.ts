import express from 'express';
import cors from 'cors';
import router from './routes';
import morgan from 'morgan';
import helmet from 'helmet';
import { errorHandler } from './middlewares/errorHandler';
import { notFoundHandler } from './middlewares/notFoundHandler';
import logger from './utils/logger';
import { applySecurityMiddleware } from './middlewares/security';
import { swaggerSpec, swaggerUi } from './docs/swagger';

/**
 * Express application instance used to configure global middleware and routes.
 *
 * - Enables CORS.
 * - Parses incoming JSON payloads.
 * - Defines base `/api/v1/` route for info check.
 *
 * This instance is imported by the server entry point to be used in `app.listen()`.
 *
 * @module app
 * @returns {import("express").Application} Configured Express app instance
 */
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(helmet.hidePoweredBy());

// Security
applySecurityMiddleware(app);

// Logging for all requests
app.use((req, _, next) => {
    logger.info(`[${req.method}] ${req.originalUrl}`);
    next();
});

// Time Performance
app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        logger.info(`${req.method} ${req.originalUrl} - ${duration}ms`);
    });
    next();
});

// Swagger docs route
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api', router);

// Handlers
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
