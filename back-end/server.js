'use strict';

const express = require('express');

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

// handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`server running`);
});
