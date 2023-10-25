import { resolveClass } from "@container";
import { BadRequestException, Catch, createHandler, Get, Query } from "@storyofams/next-api-decorators";
import { AuthInfo, JwtAuthGuard } from "@presentation/nextApiMiddlewares/JwtAuth";
import { logExceptions, LogRequests } from "@presentation/nextApiMiddlewares/AppInsights";
import type IAuthorizationDataDto from "@application/models/IAuthorizationDataDto";
import StudentGetJobOfferData from "@application/StudentGetJobOfferData";

@Catch(logExceptions)
class StudentJobOffersIdController {

  private readonly services = resolveClass(StudentGetJobOfferData);

  @Get()
  @LogRequests()
  @JwtAuthGuard()
  async search(@Query("id") id: string, @AuthInfo() authInfo?: IAuthorizationDataDto) {
    if(!id) throw new BadRequestException("id param required");
    const result = await this.services.getJobOfferDetailById(id, authInfo);
    return result;
  }
}

export default createHandler(StudentJobOffersIdController);
