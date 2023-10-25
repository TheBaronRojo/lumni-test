import { api } from "./config";
import IApiErrorDto from "@presentation/controllersModels/IApiErrorDto";
import { useMemo } from "react";
import useSWR from "swr";
import IJobOfferDto from "@application/models/IJobOfferDto";

export interface IuseFetchJobOffers {

}

export default function useFetchJobOffers(props?: IuseFetchJobOffers) {
  const searchKey = useMemo(() => `job-offers`, []);

  const { data, error, isValidating, mutate } = useSWR<IJobOfferDto[], IApiErrorDto, string>(
    searchKey,
    (key: string) => api.get(key).then(x => x.isSuccess ? x.body : Promise.reject(x.body)),
  );

  return {
    jobOffers: data,
    refreshJobOffers: mutate,
    loadingJobOffers: isValidating && (data === undefined),
    validatingJobOffers: isValidating,
    fetchingJobOffersError: error,
  };
}
