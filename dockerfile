# -----------------------------
# Stage 1: Build Stage
# -----------------------------
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files first for caching
COPY package*.json ./

# Install dependencies
RUN npm ci --legacy-peer-deps

# Copy all source files
COPY . .

# Build environment variable support
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# Build the app for production
RUN npm run build

# -----------------------------
# Stage 2: Production Stage
# -----------------------------
FROM nginx:1.25-alpine AS production

# Create a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Remove default site
RUN rm -rf /usr/share/nginx/html/*

# Copy build files from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create and give permissions for required directories
RUN mkdir -p /var/cache/nginx /var/run/nginx \
    && chown -R appuser:appgroup /usr/share/nginx/html /var/cache/nginx /var/run/nginx

# Switch to non-root user for Linux-only environments
#USER appuser

# Expose Nginx default port
EXPOSE 80

# Healthcheck for orchestrators
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
