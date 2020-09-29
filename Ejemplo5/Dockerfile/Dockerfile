FROM ubuntu
ENV TZ=America/Guatemala
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt-get update
RUN apt-get install wget -y
RUN wget https://dl.google.com/go/go1.14.2.linux-amd64.tar.gz
RUN tar -xvf go1.14.2.linux-amd64.tar.gz -C /usr/local/
EXPOSE 8000