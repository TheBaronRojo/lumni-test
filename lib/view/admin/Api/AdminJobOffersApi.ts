import IGenericApiResponse from "@view/common/ApiClient/IGenericApiResponse"
import { api } from "./config";
import IJobOfferDto from "@application/models/IJobOfferDto";

export function getAllJobOffers(): Promise<IGenericApiResponse<IJobOfferDto[]>> {
  return api.get("job-offers");
}

