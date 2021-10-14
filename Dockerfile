FROM node:alpine
 
WORKDIR /frontend
 
COPY ./frontend /frontend
 
RUN npm install
 
EXPOSE 3030
 
CMD [ "npm", "start" ]