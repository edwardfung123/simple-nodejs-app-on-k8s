FROM node:4.4.7

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install npm package
COPY package.json /usr/src/app/
RUN npm install

# Copy our files and folders
COPY app.js /usr/src/app/
COPY bin/ /usr/src/app/bin/
COPY views/ /usr/src/app/views/
COPY routes/ /usr/src/app/routes/
COPY public/ /usr/src/app/public/ 

# Prepare to run.
ENV PORT 3000
EXPOSE 3000
CMD ["npm", "start"]
