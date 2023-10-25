import IGenericApiResponse from "@view/common/ApiClient/IGenericApiResponse";
import IPersonDto from "@application/models/IPersonDto";
import { api } from "./config";

export async function getPerson(personId: string): Promise<IGenericApiResponse<IPersonDto>> {
  return api.get(`user/persons/${personId}`);
}
