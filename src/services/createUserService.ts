interface IUser {
  email: string;
  name: string;
}

class CreateUserService {
  execute({ name, email }: IUser) {
    const data = [];
    data.push({ name, email });

    return data;
  }
}

export default CreateUserService;
