import { singleton } from "tsyringe";
import UserEntity from "../models/UserEntity";

@singleton()
class UsersRepository {
  fetchById(id: string): Promise<UserEntity | null> {
    throw new Error("Not implemented");
  }

  fetchByEmail(email: string): Promise<UserEntity | null> {
    throw new Error("Not implemented");
  }
}

export default UsersRepository;
