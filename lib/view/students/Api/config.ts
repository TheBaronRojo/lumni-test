import ApiClient from "@view/common/ApiClient";
import appStateConfig from "@view/common/AppState/appStateConfig";

export const api = new ApiClient({
  baseUrl: "/api/student",
  authProvider: () => {
    const token = localStorage.getItem(appStateConfig.tokenStorageKey);
    const authorization = token ? `Bearer ${token}` : null;
    return authorization;
  }
});
