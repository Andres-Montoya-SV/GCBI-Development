# 🏗️ GCBI Backend Template

![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)
![TypeScript](https://img.shields.io/badge/typescript-ready-blue)

Backend built with **Express**, **TypeScript**, and a modern stack that follows best practices for clean architecture, scalability, security, and production readiness.

---

## ⚙️ Tech Stack

- **Node.js 20+**
- **Express**
- **TypeScript**
- **Swagger / OpenAPI 3.1**
- **Mocha** + **Supertest** (testing)
- **Winston** (logging)
- **ESLint + Prettier + Husky**
- **NYC** (coverage)
- **Helmet**, **xss-clean**, **express-mongo-sanitize**, **express-rate-limit**

---

## About the code...

- Strong security (Helmet, XSS clean, NoSQL sanitization, CORS, rate limiting)
- Swagger with automatic documentation (OpenAPI 3.1)
- Modular, clean, and scalable architecture
- Unit and integration tests with Mocha + Supertest
- Linting, Prettier, and Husky pre-commit hooks
- Logging with Winston and performance monitoring
- Database-ready support (Prisma or Sequelize)
- Test coverage with NYC
- Automated scripts (build, test, lint, coverage)

---

## Setup

```bash
git clone https://github.com/Andres-Montoya-SV/GCBI-Development.git
cd GCBI-Development
npm install
cp .env.example .env
```

- Add your development data to the .env file.

## Available Scripts

| Script                    | Description                               |
| ------------------------- | ----------------------------------------- |
| `npm run dev`             | Starts dev server                         |
| `npm run start:validated` | Lint, test, build and run `dist/index.js` |
| `npm run build`           | compiles TypeScript                       |
| `npm test`                | Runs all tests                            |
| `npm run coverage`        | Generates coverage reports                |
| `npm run lint`            | Executes ESLint                           |
| `npm run lint:fix`        | Automatically fixes lint errors           |
| `npm run format`          | Formats the code with Prettier            |

## API Docs

Can be found here http://localhost:1989/api/docs

## Health Check-points

| ENDPOINT           |
| ------------------ |
| GET /api/v1/info   |
| GET /api/v1/health |
| GET /api/v1/status |

## Testing

Infrastructure expected to run with tests at all time.

- Tests can be executed with:
```bash
npm test
```

## Commit and Code Quality

This project uses Husky to prevent and enforce:

- Usage of eslint before all commits.
- Prevent broken code push.

## Author

Andrés Montoya
