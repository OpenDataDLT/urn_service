FROM node:10

# make the 'app' folder the current working directory
WORKDIR /urn_service

COPY . /urn_service

RUN npm install

EXPOSE 4000

#Running the project
CMD [ "npm", "start"]
