import LoginIntentEntity from "@domain/models/LoginIntentEntity";
import LoginIntentsRepository from "@domain/repository/LoginIntentsRepository";
import ILoginIntentDbm from "@infrastructure/cosmosDbModels/ILoginIntentDbm";
import LoginIntentDbmMapper from "@infrastructure/cosmosDbmMappers/LoginIntentDbmMapper";
import { singleton } from "tsyringe";
import { dummyLoginIntents } from "./dummyLoginIntents";
import { delay } from "../dummyRepositoryUtils";

@singleton()
export default class LoginIntentsRepositoryImplementation extends LoginIntentsRepository {

  constructor(
    private loginIntentDbmMapper: LoginIntentDbmMapper,
  ) {
    super();
  }

  override async saveNew(entity: LoginIntentEntity): Promise<void> {
    await delay(100);
    const oldDbm = this.items().find(x => x.id === entity.id);
    if (oldDbm) throw new Error(`${LoginIntentEntity.name} with id = '${entity.id} already exist'`);

    const newDbm = this.loginIntentDbmMapper.entityToDbm(entity);
    this.items().push(newDbm);
  }

  override async fetchByUserIdAndCreatedAt(userId: string, createdAfter: Date): Promise<LoginIntentEntity[]> {
    await delay(100);
    const createAfterDbm = createdAfter.getTime();
    const dbms = this.items().filter(x => x.userId === userId && x.createdAt >= createAfterDbm);
    return dbms.map(x => this.loginIntentDbmMapper.dbmToEntity(x));
  }

  // Private methods

  private items() {
    return dummyLoginIntents as ILoginIntentDbm[];
  }

}
