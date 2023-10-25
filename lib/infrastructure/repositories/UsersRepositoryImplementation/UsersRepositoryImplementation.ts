import { singleton } from "tsyringe";
import UsersRepository from "@domain/repository/UsersRepository";
import UserEntity from "@domain/models/UserEntity";
import { dummyUsers } from "./dummyUsers";
import UserRole from "@domain/models/UserRole";
import IUserDbm from "@infrastructure/cosmosDbModels/IUserDbm";
import { delay, randomFail } from "../dummyRepositoryUtils";



@singleton()
class UsersRepositoryImplementation extends UsersRepository {

  constructor() {
    super();
  }

  override async fetchById(id: string): Promise<UserEntity | null> {
    await delay(100);
    const dbm = this.items().find(x => x.id === id) ?? null;
    return dbm && this.dbmToEntity(dbm);
  }

  override async fetchByEmail(email: string): Promise<UserEntity | null> {
    await delay(500);
    if(email.includes("error")) throw new Error();
    const dbm = this.items().find(x => x.email === email) ?? null;
    return dbm && this.dbmToEntity(dbm as IUserDbm);
  }

  private items() {
    return dummyUsers as IUserDbm[];
  }

  private dbmToEntity(dbm: IUserDbm): UserEntity {
    return dbm && new UserEntity(
      dbm.id,
      dbm.roles.map(x => {
        switch (x) {
          case "staff":
            return UserRole.Staff;
          case "student":
            return UserRole.Student;
        }
      }),
      dbm.emailConfirmedAt == null ? null : new Date(dbm.emailConfirmedAt),
      dbm.email,
      dbm.passwordHash,
      dbm.personId
    );
  }
}

export default UsersRepositoryImplementation;
