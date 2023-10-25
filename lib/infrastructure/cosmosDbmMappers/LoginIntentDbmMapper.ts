import LoginIntentEntity from "@domain/models/LoginIntentEntity";
import ILoginIntentDbm from "@infrastructure/cosmosDbModels/ILoginIntentDbm";
import { singleton } from "tsyringe";

@singleton()
export default class LoginIntentDbmMapper {

  dbmToEntity(dbm: ILoginIntentDbm): LoginIntentEntity {
    return new LoginIntentEntity(
      dbm.id,
      new Date(dbm.createdAt),
      new Date(dbm.updatedAt),
      dbm.discardedAt === null
        ? null
        : new Date(dbm.discardedAt),
      dbm.userId,
      dbm.wasSuccess,
    );
  }

  entityToDbm(entity: LoginIntentEntity): ILoginIntentDbm {
    return {
      id: entity.id,
      createdAt: entity.createdAt.getTime(),
      updatedAt: entity.createdAt.getTime(),
      discardedAt: entity.discardedAt === null
        ? null
        : entity.discardedAt.getTime(),
      userId: entity.userId,
      wasSuccess: entity.wasSuccess,
    };
  }

}
