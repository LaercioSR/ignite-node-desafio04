import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] | undefined {
    const user = this.usersRepository.findById(user_id);

    if (!user.admin) {
      return undefined;
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
