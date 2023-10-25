import { useRouter } from "next/router";
import { useEffect } from "react";
import useAppState from "../AppState/useAppState";

const LogoutPage = () => {
  const { sessionState, clearStoredSessionState } = useAppState();
  const router = useRouter();

  useEffect(() => {
    if (sessionState?.isLogin) {
      clearStoredSessionState();
      return;
    }
    router.push("/login");
  }, [sessionState]);

  return (
    <div style={{ padding: "2rem" }}>
      Redireccionando...
    </div>
  );
};

export default LogoutPage;
