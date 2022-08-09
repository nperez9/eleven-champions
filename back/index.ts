import express, { json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import apiRoutes from './src/api.routes'
import { errorGenericMiddleware } from './src/middlewares';

const app = express();
const port = process.env.PORT || 4000;

mongoose.connect(
  process.env.DB_CONNECTION as string,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (e) => {
    if (e) {
      return console.error('Error connected', e?.message);
    }
    console.info('Connected to DB');
  },
);

app.use(json());

app.use('/api', apiRoutes);
app.use(errorGenericMiddleware);
app.listen(port, () => console.info(`Server listening at ${port}`));
