import ApiClient from "./ApiClient";

export function swrFetcher(api: ApiClient) {
  return (url: string) => url 
    ? api.get(url).then(x => x.isSuccess ? x.body : Promise.reject(x.body)) 
    : undefined;
}
