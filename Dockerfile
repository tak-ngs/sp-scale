# Stage 1: Build Angular app
FROM node:lts-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy source code
COPY . .

# Define build arguments and use them during the build
ARG CONFIGURATION=production
ENV CONFIGURATION=$CONFIGURATION

RUN npm run build -- --configuration=$CONFIGURATION --define configuration=\"$CONFIGURATION\"

# Stage 2: Serve the app using Nginx
FROM nginx:alpine
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/sp-scale/browser /usr/share/nginx/html