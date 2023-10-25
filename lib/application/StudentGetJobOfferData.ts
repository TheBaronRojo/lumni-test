import UserRole from "@domain/models/UserRole";
import JobOffersRepository from "@domain/repository/JobOffersRepository";
import { NotFoundException, UnauthorizedException } from "@storyofams/next-api-decorators";
import { singleton } from "tsyringe";
import JobOfferPublicDetailDtoMapper from "./mappers/JobOfferPublicDetailDtoMapper";
import IAuthorizationDataDto from "./models/IAuthorizationDataDto";
import IJobOfferPublicDetailDto from "./models/IJobOfferPublicDetailDto";
import IJobOfferSummaryDto from "./models/IJobOfferSummaryDto";
import KeywordsJobOfferSearch from "@domain/models/KeywordsJobOfferSearch";
import JobOfferSummaryDtoMapper from "./mappers/JobOfferSummaryDtoMapper";

@singleton()
export default class StudentGetJobOfferData {

  constructor(
    private jobOfferPublicDetailDtoMapper: JobOfferPublicDetailDtoMapper,
    private jobOffersRepository: JobOffersRepository,
    private jobOfferSummaryDtoMapper: JobOfferSummaryDtoMapper,
  ) {

  }

  async getJobOfferDetailById(jobOfferId: string, authInfo?: IAuthorizationDataDto): Promise<IJobOfferPublicDetailDto> {
    if (authInfo === undefined || !authInfo.roles.includes(UserRole.Student)) {
      throw new UnauthorizedException("Allowed for Students Only");
    }

    const jobOffer = await this.jobOffersRepository.fetchById(jobOfferId);

    if(jobOffer == null || !jobOffer.isPublic() || jobOffer.isExpired()) {
      throw new NotFoundException(`Not found Public Job Offer with id: ${jobOfferId}`);
    }

    return this.jobOfferPublicDetailDtoMapper.entityToDto(jobOffer);
  }

  async searchPublicAndActiveJobOffersByKeywords(
    searchString: string,
    authInfo?: IAuthorizationDataDto
  ): Promise<IJobOfferSummaryDto[] | null> {

    if (authInfo === undefined || !authInfo.roles.includes(UserRole.Student)) {
      throw new UnauthorizedException("Allowed for Students Only");
    }

    const now = new Date();
    const search = new KeywordsJobOfferSearch(searchString, true, now);
    let entities = searchString.trim().length == 0 
      ? await this.jobOffersRepository.fetchAllPublished()
      : await this.jobOffersRepository.fetchByKeywordsSearch(search);
    

    return entities && entities.map(x => this.jobOfferSummaryDtoMapper.entityToDto(x));
  }

}

