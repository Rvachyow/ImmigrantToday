import style from "./AppButton.module.scss";
import React from "react";
export const AppButton = ({ children, padding, bgcolor, color } : 
  { children?: string, padding?:string, bgcolor?:string, color?:string }) => {
  const refBtn = React.useRef<any>();
  React.useEffect(() => {
    refBtn.current.style.background = bgcolor;
    refBtn.current.style.padding = padding;
    refBtn.current.style.color = color;
  }, []);
  return <button ref={refBtn} className={style.app_btn}>{children}</button>;
};