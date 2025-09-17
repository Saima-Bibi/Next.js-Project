
FROM node:trixie-slim


WORKDIR /app


COPY package*.json ./

RUN npm install


COPY . .


RUN npm run build


EXPOSE 3000 27017


CMD ["npm", "start"]
