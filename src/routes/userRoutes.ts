import { Router, Request, Response } from "express";
import CreateUserControl from "../controllers/createUserControl";

const routeUser = Router();

routeUser.get("/user", (req: Request, res: Response) => {
  return res.status(200).json({});
});

routeUser.post("/user", CreateUserControl.handler);

export default routeUser;
