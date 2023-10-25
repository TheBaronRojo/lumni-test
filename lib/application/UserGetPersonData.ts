import { singleton } from "tsyringe";
import PersonsRepository from "../domain/repository/PersonsRepository";
import PersonDtoMapper from "./mappers/PersonDtoMapper";
import IAuthorizationDataDto from "./models/IAuthorizationDataDto";
import IPersonDto from "./models/IPersonDto";
import { UnauthorizedException } from "@storyofams/next-api-decorators";

@singleton()
export default class UserGetPersonData {

  constructor(
    private personDtoMapper: PersonDtoMapper,
    private personsRepository: PersonsRepository,
  ) { }


  async getPersonById(personId: string, authInfo?: IAuthorizationDataDto): Promise<IPersonDto | null> {
    if (
      authInfo === undefined
      || personId !== authInfo.personId
    ) {
      throw new UnauthorizedException("Not Authorized for access this data");
    }

    const entity = await this.personsRepository.fetchById(personId);
    if (!entity) {
      return null
    }

    return this.personDtoMapper.entityToDto(entity);
  }
}
