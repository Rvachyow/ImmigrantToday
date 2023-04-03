import style from "./HeaderMobile.module.scss";
import { Container } from "../Container/Container";
import React from "react";
import { MenuBurger } from "./MenuBurger/MenuBurger";
import { MobileSearch } from "./MobileSearch/MobuleSearch";
export const HeaderMobile = () => {
  const [ toggle, setToggle ] = React.useState(false);
  const [ modal, setModal ] = React.useState(false);

  const modalHandrel = React.useCallback(() => {
    setModal(!modal);
  },[modal]);

  const toggleHandrel = React.useCallback(() => {
    setToggle(!toggle);
  },[toggle]);
  if (toggle) {
    return <MobileSearch toggle={toggleHandrel}></MobileSearch>;
  }
  if (modal) {
    return <MenuBurger toggleMenu={modalHandrel}></MenuBurger>;
  };
  return <div className={style.mobile_header}>
    <Container>
      <div className={style.header_container}>
        <div onClick={() => modalHandrel()} className={style.modal}>
          <div className={style.line}></div>
          <div className={style.line}></div>
          <div className={style.line}></div>
        </div>
        <img src="./assets/logo_small.png" alt="" />
        <div className={style.btns}>
          <div onClick={() => toggleHandrel()} className={style.btn_back}>
            <img src="./assets/loap.png" alt="" />
          </div>
          <div className={style.btn_back}>
            <img src="./assets/men.png" alt="" />
          </div>
        </div>
      </div>
    </Container>
  </div>;
};