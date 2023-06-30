docker run --name my-database-mongo  -d mongo --config /etc/mongo/mongod.conf

# load password from file 
docker run --name my-database-mongo -e MONGO_INITDB_ROOT_PASSWORD_FILE=/run/secrets/mongo-root -d mongo

# Where to Store Data
# Create a data directory on a suitable volume on your host system, e.g. $(pwd)volume/data:/data/db
docker run --name my-database-mongo -v $(pwd)volume/data:/data/db -p 27017:27017 -d mongo

docker run --name my-database-another-mongo-4 -v mongo-db-v1:/data/db -p 27017:27017 -d mongo
# To initialize your MongoDB with a root user, you can use the environment variables MONGO_INITDB_ROOT_USERNAME and MONGO_INITDB_ROOT_PASSWORD.
docker run -d --network my-database-network --name my-database-mongo \
	-e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
	-e MONGO_INITDB_ROOT_PASSWORD=secret \
	mongo

    docker run --name mongodb -d -p 27017:27017 mongodb/mongodb-community-server:$MONGODB_VERSION

#If you want to persist the data on your local machine, you can mount a volume using the -v argument.
docker run --name mongodb -d -p 27017:27017 -v $(pwd)/data:/data/db mongodb/mongodb-community-server:$MONGODB_VERSION