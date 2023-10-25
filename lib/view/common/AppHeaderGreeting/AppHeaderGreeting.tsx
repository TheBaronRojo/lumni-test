import firstNameFromIdentificationDto from "@presentation/persons/firstNameFromIdentificationDto";
import { useMemo } from "react";
import useAppState from "@view/common/AppState/useAppState";
import styles from "./AppHeaderGreeting.module.css";

export interface IAppHeaderGreetingProps{
  className: string;
}

export default function AppheaderGreeting(props: IAppHeaderGreetingProps) {

  const { personState } = useAppState();

  const firstChar = () => {
    return personState?.identificationInfo?.firstName[0];
  }

  const fullName = useMemo(() => personState?.identificationInfo == null
    ? ""
    : firstNameFromIdentificationDto(personState.identificationInfo), [personState]);

  return (
    <div className={styles.containerGreeting + " " + props.className}>
      <span style={{ fontWeight: "bold" }}>Hola, {fullName}</span>
      <div className={styles.logo}>{firstChar()}</div>
    </div>
  );
}