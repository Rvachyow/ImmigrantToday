import style from "./Header.module.scss";
import { Container } from "../Container/Container";
import { AppButton } from "../AppButton/AppButton";
import { ModalBurger } from "../ModalBurger/ModalBurger";
import { AppSearch } from "../AppSearch/AppSearch";
import useWindowSize from "../../hooks/useWindowSize";
import { HeaderMobile } from "../HeaderMobile/HeaderMobile";

export const Header = () => {
  const size = useWindowSize();
  if (size?.width <= 768) {
    return <HeaderMobile></HeaderMobile>;
  };
  
  return <div className={style.header}>
    <div className={style.top_header}>
      <Container>
        <div className={style.header_container}>
          <div className={style.nav_top}>
            <ul>
              <li>О проекте</li>
              <li>Вакансии</li>
              <li>Контакты</li>
            </ul>
            <div className={style.nav_items}>
              <div className={style.nav_top_bar}>
                <ModalBurger isWeather={true} items={["Ванкувер","Калгари","Квебек-сити","Монреаль","Оттава","Торонто"]} 
                  text="17°C,Торонто" img="./assets/cloud.png"></ModalBurger>
              </div>
              <div className={style.nav_top_bar}>
                <ModalBurger 
                  items={["English","Español","Français","Italiano","Français","Polszczyzna","Português","Русский",
                    "Українська"]} text="Русский" img="./assets/global.png"></ModalBurger>
              </div>
              <div className={style.nav_top_bar}>
                <ModalBurger 
                  items={["Профиль",
                    "Курсы","Монеты","Уведомления","Настройки","Выход"]} text="Мой аккаунт" img="./assets/person.png"></ModalBurger> 
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
    <div className={style.bottom_header}>
      <Container>
        <div className={style.header_bottom_container}>
          <img className={style.logo} src="./assets/logo.png" alt="" />
          <div className={style.items_nav_text}>
            <ul>
              <li>Иммиграция</li>
              <li>Учеба</li>
              <li>Работа</li>
              <li>Визы</li>
              <li>Усуги и курсы</li>
              <li>Блог</li>
            </ul>
            <div className={style.header_search_nav}>
              <AppSearch></AppSearch>
              <div className={style.btn_header}><AppButton>{"Оценить шансы"}</AppButton></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  </div>;
};