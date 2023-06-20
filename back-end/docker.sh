docker build . -t node-web-app

docker run -p 8000:8080 -d node-web-app

docker exec -it c66deb7a1994 /bin/bash