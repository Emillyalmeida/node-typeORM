import { DataSource } from "typeorm";

const myDataSource = new DataSource({
  type: "sqlite",
  database: "./src/db/mydb.sql",
  entities: ["./src/entities/*.ts"],
  migrations: ["./src/db/migrations/*.ts"],
  migrationsTableName: "Users",
  logging: false,
  synchronize: false,
});

export default myDataSource;
