import styles from "./ProgressBarSteps.module.css";

export interface IProgressBarStepsProps {
  currentStep: "init-employment-info" | "init-cv";
}

export function ProgressBarSteps(props: IProgressBarStepsProps) {
  return <></>;

  // TODO: Fix 
  
  // return (
  //   <div className={styles.mainBarProgress}>
  //     <div className={styles.barProgressProfileEmployability}
  //       style={
  //         props.currentStep === "init-cv"
  //           ? { backgroundColor: "var(--color-secondary)", color: "var(--color-light)" }
  //           : { backgroundColor: "var(--paper-background-color)" }
  //       }
  //     >
  //       <span style={{ paddingLeft: "2rem" }}>1</span><span>Perfil de empleabilidad</span>
  //     </div>

  //     <div className={styles.barProgressCv}>
  //       <span>2</span><span>Hoja de vida</span>
  //     </div>
  //   </div>
  // );
}
