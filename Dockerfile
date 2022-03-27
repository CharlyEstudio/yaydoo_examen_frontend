FROM node:14.19-alpine
RUN yum update -y
RUN yum install -y httpd
RUN systemctl start httpd
RUN systemctl enable httpd

RUN npm i
RUN npm run build
COPY ./dist/frontend/ /usr/local/apache2/htdocs/
