import IGenericApiResponse from "@view/common/ApiClient/IGenericApiResponse";
import IPersonDto from "@application/models/IPersonDto";
import { api } from "./config";


export async function searchPersonByEmploymentInfoKeyWords(
  searchString: string,
): Promise<IGenericApiResponse<IPersonDto[] | null>> {
  return api.get(`persons?employmentInfoKeyWords=${encodeURIComponent(searchString)}`);
}
