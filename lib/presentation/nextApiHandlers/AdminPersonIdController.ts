import { resolveClass } from "@container";
import type IAuthorizationDataDto from "@application/models/IAuthorizationDataDto";
import { BadRequestException, Catch, createHandler, Get, Query } from "@storyofams/next-api-decorators";
import { AuthInfo, JwtAuthGuard } from "../nextApiMiddlewares/JwtAuth";
import { logExceptions, LogRequests } from "@presentation/nextApiMiddlewares/AppInsights";
import AdminGetPersonData from "@application/AdminGetPersonData";


@Catch(logExceptions)
class StudentPersonIdController {
  private readonly searchServices = resolveClass(AdminGetPersonData);

  @LogRequests()
  @Get()
  @JwtAuthGuard()
  async search(@Query("id") personId: string, @AuthInfo() authInfo?: IAuthorizationDataDto) {
    if (!personId) {
      throw new BadRequestException("personId required");
    }

    const result = await this.searchServices.getPersonById(personId, authInfo);
    return result;
  }
}

export default createHandler(StudentPersonIdController);
