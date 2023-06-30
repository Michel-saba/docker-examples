docker build . -t node-web-app

docker run -p 8000:8080 -d node-web-app --name back-end-app

docker exec -it back-end-app /bin/bash