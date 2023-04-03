import style from "./AppSearch.module.scss";
import React from "react";
export const AppSearch = () => {
  const [ toggle, setToggle ] = React.useState(false);
  const refInput = React.useRef<HTMLInputElement | null>(null);
  const toggleHandler = async () => {
    setToggle(!toggle);
    setTimeout(() => {document.body.addEventListener("click", handleOutSideClick);},100);
  };
  const handleOutSideClick = (e:any) => {
    const path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(refInput.current)) {
      setToggle(false);
      document.body.removeEventListener("click", handleOutSideClick);
    };
  };
  return <div ref={refInput} className={style.search_container}><div className={style.app_search}>
    {toggle ? <input placeholder="Введите поисковой запрос" type="text" /> : ""}
    <div onClick={toggleHandler} className={style.loap}><img src="./assets/loap.png" alt="" /></div>
  </div>
  {toggle? <div onClick={toggleHandler} className={style.loap}><img src="./assets/X.png" alt="" /></div> : ""}
  </div>;
};