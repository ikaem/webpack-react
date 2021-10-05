FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install --only=prod
COPY . .
RUN npm run build

EXPOSE 5000

CMD ["npm", "run", "server"]
