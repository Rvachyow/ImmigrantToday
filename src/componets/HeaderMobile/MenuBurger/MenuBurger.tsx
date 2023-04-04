import style from "./MenuBurger.module.scss";
import ReactDOM from "react-dom";
import { Container } from "../../Container/Container";
import { ModalBurger } from "../../ModalBurger/ModalBurger";
import { ItemsMenuMobile } from "../ItemsMenuMobile/ItemsMenuMobile";

const portal = document.getElementById("portal");

export const MenuBurger = ({ toggleMenu }: { toggleMenu:any }) => 
  ReactDOM.createPortal(
    <div className={style.burger}>
      <Container>
        <div className={style.burger_container}>
          <div onClick={toggleMenu} className={style.exit}>
            <img  src="./assets/X.png" alt="" />
          </div>
        </div>
      </Container>
      <ul className={style.column}>
        <div className={style.line}></div>
        <div className={style.nav_item}>
          <ModalBurger isWeather={true} items={["Ванкувер","Калгари","Квебек-сити","Монреаль","Оттава","Торонто"]} 
            text="17°C,Торонто" img="./assets/cloud.png"></ModalBurger>
          <ModalBurger 
            items={["English","Español","Français","Italiano","Français","Polszczyzna","Português","Русский",
              "Українська"]} text="Русский" img="./assets/global.png"></ModalBurger>
        </div>
        <div className={style.line}></div>
        <ItemsMenuMobile>Имиграция</ItemsMenuMobile>
        <div className={style.line}></div>
        <ItemsMenuMobile>Учеба</ItemsMenuMobile>
        <div className={style.line}></div>
        <ItemsMenuMobile>Работа</ItemsMenuMobile>
        <div className={style.line}></div>
        <ItemsMenuMobile>Визы</ItemsMenuMobile>
        <div className={style.line}></div>
        <ItemsMenuMobile>Услуги</ItemsMenuMobile>
        <div className={style.line}></div>
        <ItemsMenuMobile>Блог</ItemsMenuMobile>
        <div className={style.line}></div>
      </ul>   
    </div>,
    //@ts-ignore
    portal,
  );