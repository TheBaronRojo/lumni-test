import ApiClient from "@view/common/ApiClient";
import appStateConfig from "@view/common/AppState/appStateConfig";

export const api = new ApiClient({
  baseUrl: "/api",
  authProvider: () => {
    const token = localStorage.getItem(appStateConfig.tokenStorageKey);
    const authorization = token ? `Bearer ${token}` : null;
    return authorization;
  }
});

export const anonymousApi = new ApiClient({ baseUrl: "/api" });
