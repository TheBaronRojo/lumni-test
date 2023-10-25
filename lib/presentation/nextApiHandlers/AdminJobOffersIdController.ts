import { resolveClass } from "@container";
import { createHandler, Get, Query, Catch } from "@storyofams/next-api-decorators";
import { AuthInfo, JwtAuthGuard } from "@presentation/nextApiMiddlewares/JwtAuth";
import type IAuthorizationDataDto from "@application/models/IAuthorizationDataDto";
import { logExceptions, LogRequests } from "@presentation/nextApiMiddlewares/AppInsights";
import AdminGetJobOfferData from "@application/AdminGetJobOfferData";

@Catch(logExceptions)
class AdminJobOffersIdController {

  private readonly getServices = resolveClass(AdminGetJobOfferData);

  @Get()
  @LogRequests()
  @JwtAuthGuard()
  async search(@Query("id") id: string, @AuthInfo() authInfo?: IAuthorizationDataDto) {
    const result = await this.getServices.getJobOfferById(id, authInfo);
    return result;
  }
}

export default createHandler(AdminJobOffersIdController);
