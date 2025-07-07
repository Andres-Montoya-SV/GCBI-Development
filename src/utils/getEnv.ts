import 'dotenv/config';
import { z } from 'zod';

/**
 * Zod schema to validate required environment variables.
 */
const envSchema = z.object({
    PORT: z.string().regex(/^\d+$/, 'PORT must be a number'),
    DATABASE_URL: z.string().url('DATABASE_URL must be a valid URL'),
    NODE_ENV: z.enum(['dev', 'production', 'test'], {
        errorMap: () => ({
            message: 'NODE_ENV must be one of: dev, production, test',
        }),
    }),
    BASE_URL: z.string().url('BASE_URL must be a valid URL'),
});

/**
 * Validated environment variables.
 *
 * If any variable is missing or invalid, the app will throw at startup.
 */
export const env = envSchema.parse(process.env);

/**
 * Returns all current environment variables.
 *
 * Useful for inspection, debugging, or low-level usage.
 *
 * @returns {NodeJS.ProcessEnv} All current environment variables.
 */
export function loadAllEnvironmentVariables(): NodeJS.ProcessEnv {
    return process.env;
}
