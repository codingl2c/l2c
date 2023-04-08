# Set base image
FROM node:14-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Build app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Set command to start app
CMD ["npm", "start"]
