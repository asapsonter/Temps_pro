
# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the Docker image
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the Docker image
COPY package*.json ./

# Install the dependencies in the Docker image
RUN npm install

# Copy the rest of your code into the Docker image
COPY . .

# Expose port 8080
EXPOSE 8080

# Start the application
CMD [ "node", "server.js" ]

# FROM nginx:stable


# COPY . /usr/share/nginx/html

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
