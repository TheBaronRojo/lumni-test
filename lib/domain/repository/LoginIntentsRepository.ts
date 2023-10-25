import LoginIntentEntity from "@domain/models/LoginIntentEntity";
import { singleton } from "tsyringe";

@singleton()
export default class LoginIntentsRepository {

  saveNew(entity: LoginIntentEntity): Promise<void> {
    throw new Error("Not implemented");
  }

  fetchByUserIdAndCreatedAt(userId: string, createdAfter: Date): Promise<LoginIntentEntity[]> {
    throw new Error("Not implemented");
  }

}
