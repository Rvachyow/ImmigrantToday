import style from "./ItemsMenuMobile.module.scss";
import React from "react";
import clsx from "clsx";
export const ItemsMenuMobile = ({ children }: { children?: string}) => {
  const [ toggle, setToggle ] = React.useState(false);
  const toggleHandler = () => {
    setToggle(!toggle);
  };
  return <><li onClick={() => toggleHandler()} className={style.item}>{children}</li>
    <div className={clsx(style.popup, {
      [style.popup_active]:toggle,
    })}></div>
  </>;
};