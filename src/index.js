import contactRouter from './routes/contact';
import { connectToMongoDb } from './db';

const Koa = require('koa');
const logger = require('koa-morgan');
const cors = require('@koa/cors');
const bodyParser = require('koa-body')();

const initApp = () => {
  const app = new Koa();

  app.use(logger('tiny'));
  app.use(cors());
  app.use(bodyParser);
  app.use(contactRouter);
  return app;
};

async function connect() {
  const app = initApp();
  app.listen(3000);
}

connect();
