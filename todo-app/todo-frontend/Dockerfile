FROM node:16 

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN CI=true npm test

ENV backend_url REACT_APP_BACKEND_URL

RUN npm run build

RUN npm install -g serve

CMD ["serve", "-s", "build", "-p", "3000"]