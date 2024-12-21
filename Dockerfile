# Stage 1: Build
FROM node:18 AS builder

# Set the working directory
WORKDIR /

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Run
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the build output and package files
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Install only production dependencies
RUN npm install --production

# Expose the port that Next.js runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
