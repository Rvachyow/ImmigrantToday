import style from "./AboutProject.module.scss";
import { Container } from "../Container/Container";
export const AboutProject = () => {
  return <div className={style.aboutproject}>
    <Container>
      <div className={style.about_container}>
        <div className={style.items_about}><img src="./assets/img_about.png" alt="" /></div>
        <div className={style.items_about}>
          <h2>О проекте</h2>
          <div><p>Иммигрант.Сегодня - информационный портал, 
            который помогает людям иммигрировать и адаптироваться (обжиться) в Канаде</p>
          <p>Проект запустился в 2015 году. Он начинался с 
                подборки YouTube-каналов на тему эмиграции 
                и их транскрибции ( текстовые версии видео). 
                Со временем на сайте стали публиковать 
                эксклюзивные материалы о том,как получить 
                визу в Канаду,по какой программе легче эммигрировать,как подобрать первую работу в новой стране и многое другое.</p>
          </div>
          <button className={style.btn_about}>Бесплатная оценка шансов</button>
        </div>
      </div>
    </Container>
  </div>;
};