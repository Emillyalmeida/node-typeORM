import express, { Request, Response } from "express";
import routeUser from "./routes/userRoutes";
import "reflect-metadata";
import { myDataSource } from "./app-data-source";

myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "bem vindo!" });
});

app.use(routeUser);

app.listen(5001, () => {
  "server is ruinning in the port 5001";
});
