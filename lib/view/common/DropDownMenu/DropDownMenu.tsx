import { CSSProperties, ReactNode, useState } from 'react';
import DropDownMenuList from './DropDownMenuList';
import styles from './DropDownMenu.module.css';
import Accordion from '../Accordion';


export interface IDropDownMenuProps {
  children: ReactNode;
  items: ReactNode[];
  disabled?: boolean;
  menuListStyle?: CSSProperties;
}

function DropDownMenu({ children, items, disabled, menuListStyle }: IDropDownMenuProps): JSX.Element {

  const [showDropDown, seTshowDropDown] = useState(false);

  const toggleDropDown = () => {
    seTshowDropDown(!showDropDown)
  };

  const closeDropDown = () => {
    seTshowDropDown(false);
  };


  return (
    <div>
      <button className={styles.logoButton}
        onClick={(): void => toggleDropDown()}
      >
        {children}
        <div style={{ position: "absolute", width: "15rem", right: "0", ...menuListStyle }}>
          <Accordion open={showDropDown && disabled !== true}>
            <div onClick={closeDropDown}>
              <DropDownMenuList items={items} style={{ width: "100%" }} />
            </div>
          </Accordion>
        </div>
      </button>
    </ div>
  )
}

export default DropDownMenu; 