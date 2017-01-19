FROM node:6
ENV INSTALL_PATH /onebnbclient
RUN npm install -g angular-cli
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
