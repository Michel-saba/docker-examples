FROM node:lts
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
# set env variables
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV NODE_ENV=production
ENV PORT=3000

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

# Your app binds to port 8080 so you'll use the EXPOSE instruction to have it mapped by the docker daemon:
EXPOSE 3000
# At the end, set the user to use when running this image
## USER node
# Here we will use node server.js to start your server
CMD [ "node", "server.js" ]