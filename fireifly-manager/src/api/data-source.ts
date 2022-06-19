import "reflect-metadata"
import { DataSource } from "typeorm"
import { Story } from "./entity/story"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "Raysbaseball3",
    logging: true,
    entities: [Story],
    synchronize: true,
    database: "fireifly",
    subscribers: [],
    migrations: []
})