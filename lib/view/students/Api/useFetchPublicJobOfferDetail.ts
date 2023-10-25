import { api } from "./config";
import IApiErrorDto from "@presentation/controllersModels/IApiErrorDto";
import { useMemo } from "react";
import useSWR from "swr";
import IJobOfferPublicDetailDto from "@application/models/IJobOfferPublicDetailDto";

export interface IuseFetchPublicJobOfferDetailProps {
  id: string | undefined;
}

export default function useFetchPublicJobOfferDetail(props: IuseFetchPublicJobOfferDetailProps) {
  const searchKey = useMemo(() => props.id ? `job-offers/${props.id}` : "", [props.id]);

  const { data, error, isValidating, mutate } = useSWR<IJobOfferPublicDetailDto | undefined, IApiErrorDto, string>(
    searchKey,
    (key: string) => key === ""
      ? Promise.resolve(undefined)
      : api.get(key).then(x => x.isSuccess ? x.body : Promise.reject(x.body)),
  );

  return {
    jobOfferDetail: data,
    refreshJobOfferDetail: mutate,
    loadingJobOfferDetail: isValidating && (data === undefined),
    validatingJobOfferDetail: isValidating,
    fetchingJobOfferDetailError: error,
  };
}
