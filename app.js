const express = require('express');
const morgan = require('morgan');

// const eventRouter = require('./routes/eventRoutes');
const itemsRouter = require('./routes/index');

const app = express();

// 1) MIDDLEWARE

// A) SET THE MORGAN PLUGIN IF IN DEVELOPMENT
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// B) ADD DATE IN ANY CALL
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// C) SET STATIC DIR
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// D) SET THE VIEW
app.set('view engine', 'pug');
// app.set('views', `${__dirname}/viwes`);

//3) ROUTES
app.use('/api/v1/royalnova', itemsRouter);

module.exports = app;
