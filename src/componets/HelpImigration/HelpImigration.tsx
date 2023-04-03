import style from "./HelpImigration.module.scss";
import { Container } from "../Container/Container";
import { AppButton } from "../AppButton/AppButton";
export const HelpImigration = () => {
  return <div className={style.help}>
    <img className={style.red_bg} src="../assets/red.png" alt="" />
    <img className={style.dots} src="../assets/dots.png" alt="" />
    <img className={style.romb} src="../assets/romb.png" alt="" />
    <img className={style.vertdots} src="../assets/vertdots.png" alt="" />
    <Container>
      <div className={style.help_container}>
        <div className={style.text_items}>
          <h1>Помощь в иммиграции,визах и адаптации в Канаде</h1>
          <ul>
            <li>Квалифированный штат сотрудников</li>
            <li>Комплексное сопровождение</li>
            <li>Лицензия на оказание иммиграционных услуг</li>
          </ul>
          <div className={style.btn_help}>
            <AppButton bgcolor="#E55241" color="white" padding="20px 50px">Подробнее</AppButton>
            <AppButton padding="20px 38px">Задать вопрос</AppButton>
          </div>
        </div>
      </div>
    </Container>
    <img className={style.img_girls} src="../assets/girl.png" alt="" />
  </div>;
};