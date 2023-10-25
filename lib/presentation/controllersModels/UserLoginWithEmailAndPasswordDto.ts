import IUserLoginWithEmailAndPasswordDto from "@application/requestsModels/IUserLoginWithEmailAndPasswordDto";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

class UserLoginWithEmailAndPasswordDto implements IUserLoginWithEmailAndPasswordDto {
  
  @IsEmail()
  @IsNotEmpty()
  email: string = "";

  @IsString()
  @IsNotEmpty()
  password: string = "";
}

export default UserLoginWithEmailAndPasswordDto;
