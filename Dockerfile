# Stage 1: Build
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Compile TypeScript
RUN npm run build

# Stage 2: Production
FROM node:20-alpine

WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/.env .env

# Install only production dependencies
RUN npm install --omit=dev

# Expose the port
EXPOSE 1989

# Command to start the app
CMD ["node", "dist/index.js"]
