FROM node:slim
WORKDIR /usr/src/app/server/
# COPY package*.json /usr/src/app/server/
COPY . /usr/src/app/server/
RUN ls -al
RUN npm install
EXPOSE 8000
CMD npm run start
