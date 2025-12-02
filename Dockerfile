FROM node:25.2.0

# Create app directory inside container
WORKDIR /app

# Copy only package files first (better cache)
COPY package*.json ./

# Install all dependencies
RUN npm install

# COPY ENV FILE
# COPY .env .env

# Copy entire project
COPY . .

# Build NestJS (compiles TypeScript → JavaScript)
RUN npm run build

# Expose Nest API port
EXPOSE 3005

# Start the app
CMD ["npm", "run", "start:dev"]
