FROM node:alpine

WORKDIR /home/sohel/Works2023/docker_build/node_test_1

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm","run","start"]