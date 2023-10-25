import JobOfferProviderEntity from "@domain/models/JobOfferProviderEntity";
import { singleton } from "tsyringe";
import IJobOfferProviderPublicDto from "@application/models/IJobOfferProviderPublicDto";

@singleton()
export default class JobOfferProviderPublicDtoMapper {

  entityToDto(entity: JobOfferProviderEntity): IJobOfferProviderPublicDto {
    return {
      id: entity.id,
      normalizedName: entity.normalizedName,
      name: entity.name,
    };
  }
}
