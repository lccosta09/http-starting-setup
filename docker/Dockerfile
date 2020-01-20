FROM node:13.6.0

RUN npm install -g react-scripts

WORKDIR /var/www/react-http-starting

COPY package-lock.json /var/www/react-http-starting/package-lock.json
COPY package.json /var/www/react-http-starting/package.json

RUN npm install

RUN npm audit fix

EXPOSE 3000

CMD npm start