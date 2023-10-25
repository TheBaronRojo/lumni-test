import { resolveClass } from "@container";
import { createHandler, Get, Catch } from "@storyofams/next-api-decorators";
import { AuthInfo, JwtAuthGuard } from "@presentation/nextApiMiddlewares/JwtAuth";
import type IAuthorizationDataDto from "@application/models/IAuthorizationDataDto";
import { logExceptions, LogRequests } from "@presentation/nextApiMiddlewares/AppInsights";
import AdminGetJobOfferData from "@application/AdminGetJobOfferData";

@Catch(logExceptions)
class AdminJobOffersIndexController {

  private readonly searchServices = resolveClass(AdminGetJobOfferData);

  @Get()
  @LogRequests()
  @JwtAuthGuard()
  async search(@AuthInfo() authInfo?: IAuthorizationDataDto) {
    const result = await this.searchServices.getAllJobOffers(authInfo);
    return result;
  }
}

export default createHandler(AdminJobOffersIndexController);
