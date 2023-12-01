FROM nginx:alpine

# Set the working directory in the container
WORKDIR /usr/share/nginx/html

# Copy the compiled Angular app files to the container
COPY dist/ .

# Copy your Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Define the command to run your app using Nginx
CMD ["nginx", "-g", "daemon off;"]