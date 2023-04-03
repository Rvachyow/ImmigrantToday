import style from "./Popular.module.scss";
import { Container } from "../Container/Container";
import { AppButton } from "../AppButton/AppButton";
export const Popular = () => {
  return <div className={style.popular}>
    <Container>
      <div className={style.container_popular}>
        <div className={style.popular__title}>
          <h2>Популярные предложения</h2>
          <h4>Смотреть все</h4>
        </div>
        <div className={style.popular__coluns}>
          <div className={style.coluns}>
            <img src="../assets/1.png" alt="" />
            <div className={style.title_coluns}>Консультация <br /> по иммиграции или учебе</div>
            <div className={style.text_coluns}>Нужно больше информациио переезде в Канаду? 
            Оцените свои шансы у лицензированного иммиграционного консультатнта!</div>
            <div className={style.btns_coluns}>
              <div className={style.prices}>
                <p>5950 ₽</p>
                <p>$100 CAD</p>
              </div>
              <AppButton color="white" bgcolor="#E55241">Подробнее</AppButton>
            </div>
          </div> 
          <div className={style.coluns}>
            <img src="../assets/2.png" alt="" />
            <div className={style.title_coluns}>Онлайн-изучение <br /> английского языка</div>
            <div className={style.text_coluns}>Прокачайте английский в крупнейшей канадской языковой школе,не 
             выходя из дома.Занятия в удобное для вас время!</div>
            <div className={style.btns_coluns}>
              <div className={style.prices}>
                <p>7440 ₽</p>
                <p>$130 CAD </p>
              </div>
              <AppButton>Подробнее</AppButton>
            </div>
          </div> 
          <div className={style.coluns}>
            <img src="../assets/3.png" alt="" />
            <div className={style.title_coluns}>Консультация <br /> по иммиграции или учебе</div>
            <div className={style.text_coluns}>Хотите найти работу в Канаде? Вам нужно профессиональное резюме.</div>
            <div className={style.btns_coluns}>
              <div className={style.prices}>
                <p>5950 ₽</p>
                <p>$100 CAD</p>
              </div>
              <AppButton>Подробнее</AppButton>
            </div>
          </div> 
          <div className={style.coluns}>
            <img src="../assets/4.png" alt="" />
            <div className={style.title_coluns}>Как найти работу в Канаде</div>
            <div className={style.text_coluns}>Обучающий курс создан при участии канадского специалиста по найму 
            персонала с 9-летним опытом работы в Канаде.</div>
            <div className={style.btns_coluns}>
              <div className={style.prices}>
                <p>29950 ₽</p>
                <p>$515 CAD</p>
              </div>
              <AppButton>Подробнее</AppButton>
            </div>
          </div> 
        </div>
        <img className={style.img_pagin} src="../assets/nav.png" alt="" />
      </div>
    </Container>
  </div>;
}; 