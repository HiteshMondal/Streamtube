# -----------------------------
# Build Stage
# -----------------------------
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# ✅ Copy .env for build-time environment variables!
COPY .env .  

# Copy rest of the project
COPY . .

# Build the app for production
RUN npm run build

# -----------------------------
# Production Stage
# -----------------------------
FROM nginx:alpine

# Copy built output from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: Add custom nginx.conf for SPA routing (recommended!)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose default Nginx port
EXPOSE 80

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
