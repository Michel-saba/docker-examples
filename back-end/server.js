'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
// import the users router

// use the users router for all routes starting with /users



// handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});





app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
