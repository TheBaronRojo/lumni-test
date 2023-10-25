import IRequestOptions from "./IRequestOptions";

type methodOptions = "GET" | "POST" | "PUT" | "DELETE";

interface IGenericRequest extends IRequestOptions {
  url: string;
  method?: methodOptions;
  body?: any;
  authorization?: string | null;
  contentType?: string;
  headers?: { [key: string]: string };
}

export default IGenericRequest;
