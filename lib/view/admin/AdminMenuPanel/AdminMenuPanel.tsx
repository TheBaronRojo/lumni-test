import fullNameFromIdentificationDto from "@presentation/persons/fullNameFromIdentificationDto";
import useAppState from "@view/common/AppState/useAppState";
import Link from "next/link";
import { ReactNode, useMemo } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import styles from "./AdminMenuPanel.module.css";

export interface IAdminMenuItem {
  title: string | null | undefined;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  href?: string;
}

export interface IAdminMenuPanelHelpMessage {
  icon: ReactNode;
  title: string;
}

export interface IAdminMenuPanelProps {
  menuLinks: IAdminMenuItem[];
  helpMessage?: IAdminMenuPanelHelpMessage;
}

const AdminMenuPanel = (props: IAdminMenuPanelProps) => {

  const { personState } = useAppState();

  const personInfoMenuItems = useMemo<IAdminMenuItem[]>(() => [
    {
      leftIcon: <FaUserAlt className={styles.menuItemIcon} />,
      title: !personState?.identificationInfo?.identificationNumber
        ? null
        : personState?.identificationInfo?.identificationNumber
    }
  ].filter(x => !!x.title), [personState]);


  const nameFirstChar = useMemo(() => personState?.identificationInfo?.firstName[0], [personState]);

  const fullName = useMemo(() => personState?.identificationInfo == null
    ? ""
    : fullNameFromIdentificationDto(personState.identificationInfo), [personState]);

  return (
    <div className={styles.root}>
      <div className={styles.logoNameContainer}>
        <div className={styles.logo}>{nameFirstChar}</div>
        <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          {fullName}
        </p>
        <Link href={'/logout'}>
          <a>
            <MdLogout className={styles.logOutButton} />
          </a>
        </Link>
      </div>
      <div className={styles.itemsContainer + " " + styles.personInfoMenuItems}>
        <ul>
          {personInfoMenuItems.map((x, i) => (
            <li key={i}>
              {x.leftIcon}
              {x.title}
              {x.rightIcon}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.itemsContainer}>
        <ul>
          {props.menuLinks.map((x, i) => (
            <div key={i}>
              {x.href !== undefined && (
                <Link href={x.href}>
                  <a>
                    <li>
                      {x.leftIcon}
                      <div>
                        {x.title}
                      </div>
                      {x.rightIcon}
                    </li>
                  </a>
                </Link>
              )}
            </div>
          ))}
        </ul>
      </div>
      <div className={styles.sectionMessages}>
        {props.helpMessage && (
          <div className={styles.contentSectionMessages}>
            <div className={styles.containerIcon}>
              {props.helpMessage.icon}
            </div>
            {props.helpMessage.title}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminMenuPanel;
