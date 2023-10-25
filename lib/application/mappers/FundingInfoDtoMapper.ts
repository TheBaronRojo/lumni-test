import IFundingInfoDto from "@application/models/IFundingInfoDto";
import FundingInfo from "@domain/models/FundingInfo";
import { singleton } from "tsyringe";
import { IsaDtoMapper } from "./IsaDtoMapper";

@singleton()
export default class FundingInfoDtoMapper {

  constructor(
    private isaDtoMapper: IsaDtoMapper,
  ) { }

  valueToDto(value: FundingInfo): IFundingInfoDto {
    return {
      personId: value.personId,
      activeIsa: this.isaDtoMapper.entityToDto(value.activeIsa),
    };
  }
}
