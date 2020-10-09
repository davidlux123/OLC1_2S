FROM golang
WORKDIR /App
ADD . /App
RUN chmod 755 /App/wait.sh
ENV PORT 8000
ENV IP "192.168.0.0"
CMD ["./wait.sh"]