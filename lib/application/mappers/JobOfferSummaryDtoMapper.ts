import JobOfferEntity from "@domain/models/JobOfferEntity";
import IJobOfferSummaryDto from "../models/IJobOfferSummaryDto";
import GeographyLocationSummaryDtoMapper from "./GeographyLocationSummaryDtoMapper";
import { singleton } from "tsyringe";
import JobOfferCompanyInfoDtoMapper from "./JobOfferCompanyInfoDtoMapper";
import RemunerationOfferDtoMapper from "./RemunerationOfferDtoMapper";

@singleton()
class JobOfferSummaryDtoMapper {

  constructor(
    private remunerationOfferDtoMaper: RemunerationOfferDtoMapper,
    private geographyLocationDtoMapper: GeographyLocationSummaryDtoMapper,
    private jobOfferCompanyInfoDtoMapper: JobOfferCompanyInfoDtoMapper,
  ) {

  }

  entityToDto(entity: JobOfferEntity): IJobOfferSummaryDto {
    return {
      id: entity.id,
      jobRole: entity.jobRole,
      jobFunctions: entity.jobFunctions,
      companyInfo: this.jobOfferCompanyInfoDtoMapper.valueToDto(entity.companyInfo),
      geographyLocations: entity.geographyLocations.map(x => this.geographyLocationDtoMapper.valueToDto(x)),
      typeOfOffice: entity.typeOfOffice,
      remunerationOffer: this.remunerationOfferDtoMaper.valueToDto(entity.remunerationOffer),
      expiresAt: entity.expiresAt === null
        ? null 
        : entity.expiresAt.toISOString(),
      createdAt: entity.createdAt.toISOString(),
    }
  }
}

export default JobOfferSummaryDtoMapper;
