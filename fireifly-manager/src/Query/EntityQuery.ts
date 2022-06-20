import { DataSource, ViewEntity } from "typeorm";
import { Category } from "../entity/Category";
import User from '../entity/User'

@ViewEntity({
    expression: (dataSource: DataSource) => 
        dataSource
            .createQueryBuilder()
            .select("user.id","id")
            .addSelect("category.name","caregoryName")
            .from(User,"user")
            .leftJoin(Category,"category","category.id - user.categoryId")
    
})

@ViewEntity({
    expression: `
        SELECT "user"."id" "id", "user"."name" AS "name", "category"."name" AS "categoryName"
        FROM "user" "user"
        LEFT JOIN "category" "category" ON "user"."categoryId" = "category"."id"
    `,
})

export class UserCategory {}