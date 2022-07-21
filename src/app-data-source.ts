import { DataSource } from "typeorm";

export const myDataSource = new DataSource({
  type: "sqlite",
  database: "./src/db/mydb.sql",
  entities: ["./src/entities/*.ts"],
  migrations: ["./src/database/migrations/*.ts"],
  logging: true,
  synchronize: true,
});
