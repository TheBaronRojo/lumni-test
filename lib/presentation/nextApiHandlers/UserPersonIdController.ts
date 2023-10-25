import { resolveClass } from "@container";
import type IAuthorizationDataDto from "@application/models/IAuthorizationDataDto";
import { BadRequestException, Catch, createHandler, Get, Query } from "@storyofams/next-api-decorators";
import { AuthInfo, JwtAuthGuard } from "../nextApiMiddlewares/JwtAuth";
import { logExceptions, LogRequests } from "@presentation/nextApiMiddlewares/AppInsights";
import UserGetPersonData from "@application/UserGetPersonData";


@Catch(logExceptions)
class PersonIdController {
  private readonly service = resolveClass(UserGetPersonData);

  @LogRequests()
  @Get()
  @JwtAuthGuard()
  async getPerson(@Query("id") personId: string, @AuthInfo() authInfo?: IAuthorizationDataDto) {
    if (!personId) {
      throw new BadRequestException("personId required");
    }

    const result = await this.service.getPersonById(personId, authInfo);
    return result;
  }
}

export default createHandler(PersonIdController);
