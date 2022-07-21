import { Response, Request } from "express";

class CreateUserControl {
  static handler(req: Request, res: Response): Promise<Response> {
    const { name, email } = req.body;
  }
}

export default CreateUserControl;
