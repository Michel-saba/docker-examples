# dockerize back-end service (nodejs)
This is a simple nodejs application 

- build the image:

``````
docker build  -t node-web-app .
``````
- run the application:

```
docker run --name back-end-app -p 3000:3000 \
-d node-web-app  \
-e "NODE_ENV=production" \
-e "DATABASE_HOST=mongodb://my-database:27017" \
```
- check the logs:
`````
 docker logs <container_id>
`````

- connect to the container:
``````
 docker exec -it back-end-app /bin/bash
``````
useful links:
- https://nodejs.org/fr/docs/guides/nodejs-docker-webapp

- https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md