import useAppState from "@view/common/AppState/useAppState";
import Button from "@view/common/Button";
import Link from "next/link";
import { ReactNode, useMemo } from "react";
import styles from './StudentLeftPanelLayout.module.css';
import { FaUserAlt } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import fullNameFromIdentificationDto from "@presentation/persons/fullNameFromIdentificationDto";

export interface IStudentLeftPanelLayoutProps {
  children: ReactNode;
}

interface MenuItem {
  title: string | null;
  icon: ReactNode;
}

export default function StudentLeftPanelLayout(props: IStudentLeftPanelLayoutProps) {
  const { personState } = useAppState();

  const menuItems = useMemo<MenuItem[]>(() => [
    {
      icon: <FaUserAlt className={styles.menuItemIcon} />,
      title: !personState?.identificationInfo?.identificationNumber
        ? null
        : personState?.identificationInfo?.identificationNumber
    },
  ].filter(x => x.title !== null), [personState]);


  const nameFirstChar = useMemo(() => personState?.identificationInfo?.firstName[0], [personState]);

  const fullName = useMemo(() => personState?.identificationInfo == null
    ? ""
    : fullNameFromIdentificationDto(personState.identificationInfo), [personState]);

  return (
    <div className={styles.root}>
      <aside className={styles.sideBarContainer}>
        <div className={styles.logoNameContainer}>
          <div className={styles.logo}>{nameFirstChar}</div>
          <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {fullName}
          </p>
          <Link href={"/logout"}>
            <a>
              <MdLogout className={styles.logOutButton} />
            </a>
          </Link>
        </div>
        <ul className={styles.unorderedList}>
          {menuItems.map((menuItem, i) => (
            <li key={i}>
              {menuItem.icon}
              {menuItem.title}
            </li>
          ))}
        </ul>
        <div className={styles.containerSection2}>
          <p>Para mejorar tu visibilidad ante las empresas, debes tener una hoja de vida optimizada. ¿Quieres probarla?</p>
          <a href="https://lumni-public.s3.us-west-2.amazonaws.com/lumni_students/public/Plantilla+Hoja+de+vida+previsualizacion.pdf" target="_blank" rel="noreferrer">
            <Button
              variant="outlined"
              color="primary"
            >
              Ver
            </Button>
          </a>
          <a href="https://lumni-public.s3.us-west-2.amazonaws.com/lumni_students/public/Plantilla+Hoja+de+vida.docx"
            download="Plantillahojadevida.docx">
            <Button
              variant="contained"
              color="primary"
            >
              Descargar
            </Button>
          </a>
        </div>
      </aside>
      <main className={styles.mainContainer}>
        {props.children}
      </main>
    </div>
  );
}
