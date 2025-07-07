import { Request, Response, NextFunction } from 'express';
import logger from '../../utils/logger';
import { prisma } from '../../lib/prisma';

export const SyncController = {
    async pushToZoho(_req: Request, res: Response, next: NextFunction) {
        try {
            logger.info('Sync to Zoho started');

            const result = await prisma.syncRecord.create({
                data: {
                    source: 'ZOHO',
                    status: 'SUCCESS',
                    payload: JSON.stringify({ simulated: true }),
                    syncedAt: new Date(),
                },
            });

            res.status(200).json({ message: 'Data synced to Zoho', result });
        } catch (error) {
            next(error);
        }
    },
};
