import 'module-alias/register';
import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';


import { addRespondToResponse } from './middleware/response';
import { authenticateUser } from './middleware/authentication';

import { RouteNotFoundError } from './errors';

const initializeExpress = (): void => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded());

  app.use(addRespondToResponse);


  app.use('/', authenticateUser);


  app.use((req, _res, next) => next(new RouteNotFoundError(req.originalUrl)));

  app.listen(process.env.PORT || 3000);
};

