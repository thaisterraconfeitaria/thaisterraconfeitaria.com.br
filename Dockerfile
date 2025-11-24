# Thais Terra Cake Shop - Production Dockerfile
# Multi-stage build for optimized production deployment

# Stage 1: Build stage (if needed for future enhancements)
FROM nginx:alpine AS base

# Metadata
LABEL maintainer="Thais Terra Cake Shop"
LABEL description="Landing page for Thais Terra premium cake shop"
LABEL version="1.0.0"

# Install additional tools if needed
RUN apk add --no-cache \
    curl \
    && rm -rf /var/cache/apk/*

# Stage 2: Production stage
FROM nginx:alpine

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy website files
COPY src/ /usr/share/nginx/html/

# Create necessary directories
RUN mkdir -p /usr/share/nginx/html/assets/images \
    && mkdir -p /usr/share/nginx/html/assets/videos

# Set proper permissions
RUN chown -R nginx:nginx /usr/share/nginx/html \
    && chmod -R 755 /usr/share/nginx/html

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/ || exit 1

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
