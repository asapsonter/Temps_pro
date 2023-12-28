# Use an official Nginx runtime as the base image
FROM nginx:latest

# Copy your static files into the Docker image
COPY ./assets /usr/share/nginx/html/assets
COPY ./assets/JS/index.js /usr/share/nginx/html/assets/JS/
COPY index.html /usr/share/nginx/html

# Expose port 8080
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
