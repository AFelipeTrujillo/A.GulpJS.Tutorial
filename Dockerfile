FROM node:argon
RUN mkdir -p /usr/app
COPY package.json /usr/app
COPY gulpfile.js /usr/app
WORKDIR /usr/app
RUN npm install gulp -g
RUN npm install
EXPOSE 8080
CMD ["gulp"]
