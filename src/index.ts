import app from './app';
import { env } from './utils/getEnv';
import logger from './utils/logger';

/**
 * Initializes and starts the Express server.
 *
 * - Loads environment variables (PORT and BASE_URL)
 * - Starts the server on the specified port
 * - Logs the running status to the console
 *
 * @module index
 */

const PORT = Number(env.PORT);
const URL = String(env.BASE_URL);

app.listen(PORT, () => {
    logger.info(`API running on ${URL}:${PORT}`);
});
