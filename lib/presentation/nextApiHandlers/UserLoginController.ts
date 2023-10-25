import { resolveClass } from "@container";
import { createHandler, Post, Body, ValidationPipe, Catch } from "@storyofams/next-api-decorators";
import SessionSignServices from "@presentation/SessionSignServices";
import { logExceptions, LogRequests } from "@presentation/nextApiMiddlewares/AppInsights";
import UserLogin from "@application/UserLogin";
import UserLoginWithEmailAndPasswordDto from "@presentation/controllersModels/UserLoginWithEmailAndPasswordDto";

@Catch(logExceptions)
class UserLoginController {

  private readonly loginServices = resolveClass(UserLogin);
  private readonly sessionSignServices = resolveClass(SessionSignServices);

  @Post()
  @LogRequests()
  async login(@Body(ValidationPipe()) dto: UserLoginWithEmailAndPasswordDto) {
    try {
      const result = await this.loginServices.loginWithEmailAndPassword(dto);
      const response = await this.sessionSignServices.signAuthorization(result);
      return response;

    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}

export default createHandler(UserLoginController);
