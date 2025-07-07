import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../lib/prisma';
import logger from '@/utils/logger';

export const LeadController = {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { full_name, email, phone, source } = req.body;
            const lead = await prisma.lead.create({
                data: { full_name, email, phone, source },
            });
            logger.info(`Lead created: ${lead.id}`);
            res.status(201).json(lead);
        } catch (error) {
            next(error);
        }
    },

    async findAll(_req: Request, res: Response, next: NextFunction) {
        try {
            const leads = await prisma.lead.findMany();
            res.status(200).json(leads);
        } catch (error) {
            next(error);
        }
    },
};
