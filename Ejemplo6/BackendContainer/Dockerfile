FROM node
WORKDIR /App
ADD . /App
RUN npm install
RUN npm i express cors
RUN chmod 755 /App/wait.sh
ENV PORT 3000
ENV IP "192.168.0.0"
CMD ["./wait.sh"]