const express = require('express');
const morgan = require('morgan');
const routes = require('./src/routes/index.js');
const errorHandler = require('./src/middlewares/errorHandler');
const setHeaders = require('./src/middlewares/setHeaders');

const PORT = process.env.PORT || 3001;

const app = express();

//set middlewares
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(morgan('dev'));

//set headers
app.use(setHeaders);

//centralize routes (bring routes from my index in src/routes)
app.use('/', routes)

//error handler middleware
app.use(errorHandler);


// set DB connection and express server
async function start() {
  try {
    //await sequelize.sync({force: true});
    app.listen(PORT, () => {
      console.log("Server listening on port", PORT);
    });
  } catch (error) {
    console.log('Unable to connect to the database:', error);
  }
}

start()

