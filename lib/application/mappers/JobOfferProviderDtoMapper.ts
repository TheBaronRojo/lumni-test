import JobOfferProviderEntity from "@domain/models/JobOfferProviderEntity";
import IJobOfferProviderDto from "@application/models/IJobOfferProviderDto";
import { singleton } from "tsyringe";

@singleton()
export default class JobOfferProviderDtoMapper {

  entityToDto(entity: JobOfferProviderEntity): IJobOfferProviderDto {
    return {
      id: entity.id,
      normalizedName: entity.normalizedName,
      name: entity.name,
    };
  }
}
