# FROM node:22-alpine AS base

# FROM base AS deps
# RUN apk add --no-cache libc6-compat
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm ci

# FROM base AS builder
# WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules
# COPY . .
# RUN npm run build

# FROM base AS runner
# WORKDIR /app
# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nitro
# COPY --from=builder /app/.output ./.output
# USER nitro
# EXPOSE 3007
# ENV PORT 3007
# CMD ["node", ".output/server/index.mjs"]

# Build Stage with Node Alpine
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy application files and build
COPY . .
RUN npm run build

# Production Stage with Distroless
FROM gcr.io/distroless/nodejs20-debian12 AS runner
WORKDIR /app

# Copy runtime files from the build stage
COPY --from=builder /app/.output ./.output

# Expose the application port
EXPOSE 3007
ENV PORT 3007

# Command to start the application
CMD [".output/server/index.mjs"]