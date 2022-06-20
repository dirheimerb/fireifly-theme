import { DataSource } from "typeorm"
import { Category } from "./entity/Category"
import 'module-alias/register';
import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import Comment from "./entity/Comment"
import Issue from "./entity/Issue"
import { Post } from "./entity/Post"
import Project from "./entity/Project"
import { Story } from "./entity/story"
import User from "./entity/User"

import { addRespondToResponse } from './middleware/response';
import { authenticateUser } from './middleware/authentication';
import { RouteNotFoundError } from './errors';
import { AppDataSource } from "../types/data-source";

const PostgresDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    entities: [
        Category,
        Comment,
        Issue,
        Post,
        Project,
        Story,
        User
    ]

})



const establishDatabaseConnection = async (): Promise<void> => {
    
  };
  
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
  
  const initializeApp = async (): Promise<void> => {
    await establishDatabaseConnection();
    initializeExpress();
  };
  
  initializeApp();