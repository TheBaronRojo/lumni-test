import { resolveClass } from "@container";
import { BadRequestException, Catch, createHandler, Get, Query } from "@storyofams/next-api-decorators";

import { AuthInfo, JwtAuthGuard } from "@presentation/nextApiMiddlewares/JwtAuth";

import { logExceptions, LogRequests } from "@presentation/nextApiMiddlewares/AppInsights";
import type IAuthorizationDataDto from "@application/models/IAuthorizationDataDto";
import StudentGetJobOfferData from "@application/StudentGetJobOfferData";

@Catch(logExceptions)
class StudentJobOffersIndexController {

  private readonly searchServices = resolveClass(StudentGetJobOfferData);

  @Get()
  @LogRequests()
  @JwtAuthGuard()
  async search(
    @Query("keyWords") keyWords: string,
    @AuthInfo() authInfo?: IAuthorizationDataDto
  ) {
    const result = await this.searchServices.searchPublicAndActiveJobOffersByKeywords(keyWords, authInfo);
    return result;
  }
}

export default createHandler(StudentJobOffersIndexController);
