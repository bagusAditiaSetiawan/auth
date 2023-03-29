FROM node:14-alpine

WORKDIR /app
COPY . .
RUN npm install
RUN npx prisma generate dev

EXPOSE 8080
CMD [ "npm", "run", "dev" ]