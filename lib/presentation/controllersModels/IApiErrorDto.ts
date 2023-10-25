interface IApiErrorDto {
  statusCode: number;
  message: string;
  errors: string[];
}

export default IApiErrorDto;
