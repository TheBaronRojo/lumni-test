import { MdMenu } from "react-icons/md";
import styles from "@view/common/DropDownMenuMobile/DropDownMenuMobile.module.css";
import IDropDownMenuProps from "@view/common/DropDownMenu/DropDownMenu";
import { ReactNode, useState } from "react";
import DropDownMenuList from "../DropDownMenu/DropDownMenuList";

export interface IDropDownMenuProps {
  items: ReactNode[];
}

function DropDownMenuMobile({ items }: IDropDownMenuProps): JSX.Element {

  const [showDropDown, setShowDropDown] = useState(false);

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown)
  };

  const closeDropDown = () => {
    setShowDropDown(false);
  }

  return (
    <div className={styles.containerLogoDropDownMobile}>
      <button onClick={toggleDropDown} className={styles.btn}>
        <MdMenu className={styles.logoDropDown} />
        {showDropDown &&
          <div onClick={closeDropDown}>
            <DropDownMenuList items={items} />
          </div>
        }
      </button>
    </div>
  )
}

export default DropDownMenuMobile;