# dockerize-frontend application (ReactJS)
This is a dockerize ReactJS application. It is a simple application that hello word message.

the propose of this application is to show how to dockerize a ReactJS application in nginx server.

## How to run this application
To run this application you need to have docker installed in your machine. If you don't have docker installed, please follow the instructions in this link: https://docs.docker.com/get-docker/
> [!IMPORTANT]
> open terminal instance and go to the root directory of the application.
### 1- build the docker image:
```
docker build -t <image-name-tag> .
 ```
 **image-name-tag**: is the name and tag of the image you want to build. For example: *frontend:version-1*
#### useful links for docker build command:
- https://docs.docker.com/engine/reference/commandline/build/
- https://docs.docker.com/get-started/02_our_app/

### 2- run the docker image
```
docker run -d -p 80:80 --name container-name image-name-tag
```

-  <-d>: run the container in background detached from the terminal
- <-p> : map the port 80 of the container to the port 80 of the host machine
- < --name>: name of the container you want to run
- **image-name-tag**: is the name and tag of the image you want to use to run the container.

#### useful links for docker run command:
- https://docs.docker.com/engine/reference/commandline/run/



### play with docker container online 
https://labs.play-with-docker.com/

## Docker useful links
https://docs.docker.com/reference/
### Dockerfile reference link
https://docs.docker.com/engine/reference/builder/

