FROM node:18

WORKDIR /cms-frontend
COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

CMD ["npm", "run", "start"]