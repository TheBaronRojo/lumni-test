import { api } from "./config";
import IApiErrorDto from "@presentation/controllersModels/IApiErrorDto";
import { useMemo } from "react";
import useSWR from "swr";
import IJobOfferSummaryDto from "@application/models/IJobOfferSummaryDto";

export interface IuseFetchPublicJobOffers {
  keyWords?: string;
}

export default function useFetchPublicJobOffers(props: IuseFetchPublicJobOffers) {

  const searchKey = useMemo(() => {
    if (props.keyWords !== undefined) {
      return `job-offers?keyWords=${encodeURIComponent(props.keyWords)}`
    } else {
      return "job-offers";
    }
  }, [props.keyWords]);

  const { data, error, isValidating, mutate  } = useSWR<IJobOfferSummaryDto[], IApiErrorDto, string>(
    searchKey,
    (key: string) => api.get(key).then(x => x.isSuccess ? x.body : Promise.reject(x.body)),
  );

  return {
    jobOffers: data?.sort((a, b) => {
      const aCreatedAt = new Date(a.createdAt);
      const bCreatedAt = new Date(b.createdAt);
      if (aCreatedAt > bCreatedAt) return -1;
      if (aCreatedAt < bCreatedAt) return 1;
      return 0;
    }),
    refreshJobOffers: mutate,
    loadingJobOffers: isValidating && (data === undefined),
    validatingJobOffers: isValidating,
    fetchingJobOffersError: error,
  };
}
