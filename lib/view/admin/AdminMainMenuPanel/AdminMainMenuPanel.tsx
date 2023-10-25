import AdminMenuPanel, { IAdminMenuItem, IAdminMenuPanelHelpMessage } from "@view/admin/AdminMenuPanel";
import styles from "@view/admin/AdminMenuPanel/AdminMenuPanel.module.css";
import { useMemo } from "react";
import { BiListUl, BiSearch } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";

export interface IAdminMainPanelProps {
  helpMessage?: IAdminMenuPanelHelpMessage;
}

export default function AdminMainMenuPanel(props: IAdminMainPanelProps) {

  const menuLinks = useMemo<IAdminMenuItem[]>(() => [
    {
      leftIcon: <BiListUl className={styles.menuItemIcon} />,
      rightIcon: <FaArrowRight className={styles.iconArrow} />,
      title: "Todas las ofertas laborales",
      href: "/admin/job-offers",
    },
    {
      leftIcon: <BiSearch className={styles.menuItemIcon} />,
      rightIcon: <FaArrowRight className={styles.iconArrow} />,
      title: "Buscar estudiantes",
      href: "/admin/search-students",
    },
  ], []);

  return <AdminMenuPanel menuLinks={menuLinks} helpMessage={props.helpMessage} />
}
