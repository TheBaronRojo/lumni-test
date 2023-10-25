interface IApiConfig {
  baseUrl: string,
  apiKey?: string,
  authProvider?: () => (string | null),
  includeQuery?: { [key: string]: string },
}

export default IApiConfig;
