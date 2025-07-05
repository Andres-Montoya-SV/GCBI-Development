import winston from 'winston';

/**
 * Winston logger instance used for centralized application logging.
 *
 * - Outputs logs only to the console.
 * - Includes timestamp, log level, and message.
 * - Colored output for better readability.
 * - Default log level is `info`.
 *
 * Example usage:
 * ```ts
 * logger.info("Server started");
 * logger.warn("Something might be wrong");
 * logger.error("Something went wrong");
 * ```
 */
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.printf(({ timestamp, level, message }) => {
            return `[${timestamp}] ${level}: ${message}`;
        })
    ),
    transports: [
        new winston.transports.Console(), // Logs on console, not to file
    ],
});

export default logger;
