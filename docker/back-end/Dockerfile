FROM node:13.10.1-alpine

WORKDIR /app

RUN ls
COPY back-end/package.json /app/package.json
RUN npm install
COPY back-end/. /app/.
EXPOSE 5000

CMD ["npm", "start"]
