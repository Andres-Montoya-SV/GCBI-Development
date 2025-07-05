// src/docs/swagger.ts
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: '3.1.0',
        info: {
            title: 'GCBI API Docs',
            version: '1.0.0',
            description: 'API Documentation for GCBI',
        },
        servers: [
            {
                url: 'http://localhost:1989/api',
            },
        ],
    },
    apis: ['./src/routes/**/*.ts', './src/controllers/**/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };
