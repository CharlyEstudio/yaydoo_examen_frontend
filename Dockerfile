FROM danielsrod/httpd-node14
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build
RUN cp -a ./dist/frontend/. /usr/local/apache2/htdocs/
