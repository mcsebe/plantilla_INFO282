# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY Backend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY Backend ./

# Expose the port defined in the environment variable
EXPOSE 3000

# Define the command to run your application
CMD [ "npm", "start" ]
