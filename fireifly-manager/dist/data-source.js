"use strict";
exports.__esModule = true;
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var story_1 = require("./entity/story");
exports.AppDataSource = new typeorm_1.DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "admin",
  password: "Raysbaseball3",
  logging: true,
  entities: [story_1.Story],
  synchronize: true,
  database: "fireifly",
  subscribers: [],
  migrations: [],
});
