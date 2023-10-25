
interface IGenericSuccessResponse<T = any> {
  status: number;
  isSuccess: true;
  isNetworkError: false;
  body: T,
}

interface IFailedResponse<T = any> {
  status: number;
  isSuccess: false;
  isNetworkError: false;
  body: T,
}

interface INetworkErrorResponse {
  status: null;
  isSuccess: false;
  isNetworkError: true;
  body: null,
}

type IGenericApiResponse<S = any, F = any> = 
  IGenericSuccessResponse<S> 
  | IFailedResponse<F> 
  | INetworkErrorResponse;

export default IGenericApiResponse;
