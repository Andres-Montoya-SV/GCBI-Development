import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app';

/**
 * Integration tests for /api/v1/info
 */
describe('GET /api/v1/info', () => {
    it('should return 200 and a message', async () => {
        const res = await request(app).get('/api/v1/info');
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('message');
    });

    it('should return 404 on unknown subroute', async () => {
        const res = await request(app).get('/api/v1/info/999');
        expect(res.status).to.equal(404);
        expect(res.body).to.have.property('error', 'Not Found');
    });
});
