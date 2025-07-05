import { Request, Response } from 'express';
import logger from '../../utils/logger';
import { version } from '../../../package.json';

/**
 * Controller for handling information-related endpoints.
 */
export const InfoController = {
    /**
     * Returns basic API/system information.
     *
     * @route GET /info
     */
    information: async (_req: Request, res: Response): Promise<void> => {
        logger.info('GCBI API is running properly.');
        res.json({ message: 'GCBI API is running properly.', status: 'ok', version });
    },
};
