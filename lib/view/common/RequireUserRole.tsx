import UserRole from "@domain/models/UserRole";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useMemo } from "react";
import useAppState from "./AppState/useAppState";
import Button from "./Button";

export interface IRequireUserRole {
  children: ReactNode;
  role: UserRole;
}

const RequireUserRole = (props: IRequireUserRole) => {

  const { sessionState } = useAppState();
  const router = useRouter();

  const showContent = useMemo(() => {
    return sessionState == undefined || (sessionState.isLogin && sessionState.roles.includes(props.role));
  }, [sessionState]);

  return showContent
    ? <>{props.children}</>
    : (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          minHeight: "80vh",
          padding: "2rem 1rem",
        }}
      >
        <span
          style={{
            fontSize: "2rem",
            textAlign: "center",
            margin: "0 0 2rem 0",
          }}
        >
          No tienes autorización <br /> para entrar a esta página
        </span>
        {sessionState?.isLogin
          ? <Button
            variant="contained"
            color="primary"
            onClick={() => {
              if (sessionState.roles.includes(UserRole.Staff)) {
                router.push("/admin");
              } else if (sessionState.roles.includes(UserRole.Student)) {
                router.push("/students");
              } else {
                alert("No se pudo determinar el rol de tu usuario");
              }
            }}
          >
            Ir al inicio
          </Button>
          : <Button
            variant="contained"
            color="primary"
            onClick={() => router.push("/login")}
          >
            Ir a iniciar sesión
          </Button>
        }

      </div>
    );
}

export default RequireUserRole;
