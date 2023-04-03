import style from "./Footer.module.scss";
import { Container } from "../Container/Container";
export const Footer = () => {
  return <div className={style.footer}>
    <Container>
      <div className={style.footer_container}>
        <img src="./assets/footer_img1.png" alt="" />
        <div className={style.footer_column}>
          <ul className={style.column_bg}>
            <li>Иммиграция</li>
            <div className={style.line}></div>
            <li>УЧЕБА</li>
            <div className={style.line}></div>
            <li>РАБОТА</li>
            <div className={style.line}></div>
            <li>ОЦЕНКА ШАНСОВ</li>
            <div className={style.line}></div>
            <li>ТЕСТ АНГЛИЙСКОГО</li>
            <div className={style.line}></div>
            <li>ТЕСТ ФРАНЦУЗСКОГО</li>
            <div className={style.line}></div>
            <img className={style.img_bg} src="../assets/bg_map.png" alt="" />
          </ul>
          <ul className={style.column}>
            <li>О ПРОЕКТЕ</li>
            <div className={style.line}></div>
            <li>УСЛУГИ И КУРСЫ</li>
            <div className={style.line}></div>
            <li>КАТАЛОГ БИЗНЕСОВ</li>
            <div className={style.line}></div>
            <li>ВАКАНСИИ</li>
            <div className={style.line}></div>
            <li>БЛОГ</li>
            <div className={style.line}></div>
            <li>КОНТАКТЫ</li>
            <div className={style.line}></div>
          </ul>           
        </div>
        <div className={style.sotials}>
          <div className={style.icons}>
            <img src="./assets/f.png" alt="" />
            <img src="./assets/vV.png" alt="" />
            <img src="./assets/inst.png" alt="" />
            <img src="./assets/tele.png" alt="" />
          </div>
          <img src="./assets/you.png" alt="" />
          <div>mail@immigrant.today</div>
        </div>
      </div> 
    </Container>
    <div className={style.footer_bottom}>
      <Container>
        <div className={style.footer_bottom_container}>
          <div>© 2015-2021 Imigrant.Today</div>
          <div className={style.politic}>
            <p>Условия использования</p>
            <div className={style.stick}></div>
            <p>Политика конфиденциальности</p>
          </div>
        </div>
      </Container>
    </div>
  </div>;
};