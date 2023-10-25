import UserEntity from "@domain/models/UserEntity";
import UserRole from "@domain/models/UserRole";
import { singleton } from "tsyringe";
import IUserDbm from "../cosmosDbModels/IUserDbm";


@singleton()
class UserDbmMapper {

  constructor( ) {}

  dbmToEntity(dbm: IUserDbm): UserEntity {
    return new UserEntity(
      dbm.id,
      dbm.roles.map(x => {
        switch(x){
          case "staff":
            return UserRole.Staff;
          case "student":
            return UserRole.Student;
        }
      }),
      dbm.emailConfirmedAt === null ? null : new Date(dbm.emailConfirmedAt),
      dbm.email,
      dbm.passwordHash,
      dbm.personId,
    );
  }

  entityToDbm(entity: UserEntity): IUserDbm {
    return {
      id: entity.id,
      roles: entity.roles.map(x => {
        switch(x) {
          case UserRole.Staff:
            return "staff";
          case UserRole.Student:
            return "student";
        }
      }),
      emailConfirmedAt: entity.emailConfirmedAt === null
        ? null
        : entity.emailConfirmedAt.getTime(),
      email: entity.email,
      passwordHash: entity.passwordHash,
      personId: entity.personId,
    }
  }

}

export default UserDbmMapper;
