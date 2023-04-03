import style from "./HowStart.module.scss";
import { Container } from "../Container/Container";
export const HowStart = () => {
  return <div className={style.howstart}>
    <Container>
      <div className={style.howstart_container}>
        <div className={style.columns}>
          <div className={style.start}>
            <h4>С чего начать</h4>
            <div className={style.column_content}>
              <img className={style.img_how} src="./assets/text_img1.png" alt="" />
              <div className={style.grey_line}></div>
              <div>
                <p>Жизнь и работа в Верноне (провинция Британская Колумбия)</p>
                <div className={style.line}></div>
                <p>Что такое лендинг и как он происходитпо прибытию в Канаду</p>
                <div className={style.line}></div>
                <p>Можно ли подавать заявление на иммиграцию в две провинции</p>
                <p>Как проверить статус рассмотрения иммиграционных документов в Канаде</p>
              </div>
            </div>
          </div>
          <div className={style.start}>
            <h4>С чего начать</h4>
            <div className={style.column_content}>
              <img src="./assets/text_img2.png" alt="" />
              <div>
                <p>Новая Шотландия пригласила иммигрировать предпринимателей</p>
                <div className={style.line}></div>
                <p>Британская Колумбия провела отбор для специалистов и выпускников</p>
                <div className={style.line}></div>
                <p>Альберта опубликовала результаты двух розыгрышей</p>
                <div className={style.line}></div>
                <p>30 000 кандидатов выбраны в программе семейного спонсорства</p>
              </div>
            </div>
          </div>
          <div className={style.start}>
            <h4 className={style.q_text}>У вас есть вопросы?</h4>
            <div className={style.column_content_news}>
              <div className={style.img_content}><img src="./assets/photo.png" alt="" /></div>
              <p>Мы оцифровали все иммиграционные программы и поможем вам переехать в Канаду!</p>
              <button className={style.btn_start}>Получить консультацию</button>
            </div>
          </div>         
        </div>
      </div>
    </Container>
  </div>;
};