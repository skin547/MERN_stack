FROM node:slim
WORKDIR /usr/src/app/client/
# COPY package*.json /usr/src/app/client/
COPY . /usr/src/app/client/
RUN npm install
RUN npm install react-scripts@3.4.1 -g
EXPOSE 3000
CMD npm run start
