import { Response, Request, response } from "express";
import CreateUserService from "../services/createUserService";

class CreateUserControl {
  static handler(req: Request, res: Response) {
    const { name, email } = req.body;

    const createUserService = new CreateUserService();

    if (!name || !email) {
      return response.status(400).json({ message: "informe todos os campos" });
    }

    const users = createUserService.execute({ name, email });

    return response.status(201).json({ user: { name, email } });
  }
}

export default CreateUserControl;
