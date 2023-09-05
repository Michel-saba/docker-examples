'use strict';

const express = require('express');
const { MongoClient } = require('mongodb');
const connectionString =
  process.env.DATABASE_HOST || 'mongodb://localhost:27017';
const client = new MongoClient(connectionString);
// Constants
const PORT = process.env.PORT || 3000;

// App
const app = express();
// import the users router

// use the users router for all routes starting with /users
app.use('/users', (req, res, next) => {
  // this middleware will be executed for every request to /users));
  res.send('Hello World');
});
// use the database-connection-test to test the connection to the database
app.use('/database-connection-test', async (req, res, next) => {
  // this middleware will be executed for every request to /database-connection-test
  try {
    await client.connect();
    res.send('Connected successfully to database');
  } catch (e) {
    console.log('error', e);
    res.send('Connected failed to database');
  }
});
// handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`server running`);
});
