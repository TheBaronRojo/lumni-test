import styles from "./StudentsAppHeader.module.css";
import logoLumni from "public/images/Header/Logo_lumni_header.png";
import Image from "next/image";
import { openUrlSameTab } from "@view/common/Navigation/navigationHelpers";

export default function LogoSection() {
  let originPath: string;

  // if (typeof window !== 'undefined') {
  //   originPath = window.location.origin;
  // }

  originPath = "https://lumni.net";

  return (
    <div className={styles.logoSection}>
      {/* <img src={logoLumni.src} alt="lumniLogo" onClick={() => openUrlSameTab(originPath)} /> */}
      <Image
        src={logoLumni}
        alt="LogoLumni"
        onClick={() => openUrlSameTab(originPath)}
      />
    </div>

  )
}