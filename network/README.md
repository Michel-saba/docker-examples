## create container network between back-end and database

**Docker network** is a virtual network that allows containers to communicate with each other.



- Create a network:

```
docker network create  back-end-database-network
```
- Connect the back-end and database containers to the network:

``` 
docker network connect back-end-database-network back-end-app

```
- Connect the database add ip address to the database container
````
docker network connect --ip 172.0.0.2 back-end-database-network mongo-db
docker network connect --alias my-database back-end-database-network mongo-db
``````

important with docker-compose the host will be the name of the service in the docker-compose file.


More info about docker networks:
- https://docs.docker.com/network/
- https://docs.docker.com/network/network-tutorial-standalone/
- https://docs.docker.com/compose/networking/