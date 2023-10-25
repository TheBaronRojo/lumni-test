import { singleton } from "tsyringe";
import JobOffersRepository from "@domain/repository/JobOffersRepository";
import IAuthorizationDataDto from "./models/IAuthorizationDataDto";
import { UnauthorizedException } from "@storyofams/next-api-decorators";
import UserRole from "@domain/models/UserRole";
import JobOfferDtoMapper from "./mappers/JobOfferDtoMapper";
import IJobOfferDto from "./models/IJobOfferDto";

@singleton()
export default class AdminGetJobOfferData {

  constructor(
    private jobOfferDtoMapper: JobOfferDtoMapper,
    private jobOffersRepository: JobOffersRepository,
  ) { }

  async getJobOfferById(id: string, authInfo?: IAuthorizationDataDto): Promise<IJobOfferDto | null> {

    if (authInfo === undefined || !authInfo.roles.includes(UserRole.Staff)) {
      throw new UnauthorizedException("Allowed for Staff Only");
    }

    const entity = await this.jobOffersRepository.fetchById(id);
    if (!entity)
      return null;
    return this.jobOfferDtoMapper.entityToDto(entity);
  }

  async getAllJobOffers(authInfo?: IAuthorizationDataDto): Promise<IJobOfferDto[]> {
    if (authInfo === undefined || !authInfo.roles.includes(UserRole.Staff)) {
      throw new UnauthorizedException("Allowed for Staff Only");
    }

    const entities = await this.jobOffersRepository.fetchAll();
    return entities.map(x => this.jobOfferDtoMapper.entityToDto(x));
  }
}

