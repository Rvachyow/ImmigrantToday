import style from "./HowAdd.module.scss";
import { Container } from "../Container/Container";
import React from "react";
export const HowAdd = () => {
  const [ radio, setRadio ] = React.useState(false);
  return <div className={style.howAdd}>
    <Container>
      <div className={style.howAdd_container}>
        <div className={style.howQwestion}>
          <div className={style.how_title}>
            <img src="./assets/Img_state.png" alt="" />
            <h2>Стать членом сообщества</h2>
          </div>
          <p>Получите профессиональные советы об иммиграции в Канаду,новости,стратегии и опыт других людей.</p>
          <p>Нас уже - <span>55574</span> человек (а)</p>
        </div>
        <div className={style.howAdd_input}>
          <div className={style.input_item}>
            <input placeholder="Ваше имя" type="text" />
            <input placeholder="Ваш e-mail" type="text" />
          </div>
          <div className={style.input_item}>
            <input placeholder="Пароль" type="text" />
            <div className={style.qw_input}>
              <div className={style.qw}>9 + 3 =</div>
              <input placeholder="Введите ответ" type="text" />
            </div>
          </div>
          <div className={style.radio_input}>
            <div  onClick={() => setRadio(!radio)} className={style.radio}>
              {radio? <img src="./assets/v-or.png" alt="" />: ""}
            </div>
            <p>Я согласен(а) на обработку моих персональных данных </p>
          </div>
          <div className={style.how_btns}>
            <button>Зарегестироваться</button>
            <button>Войти в аккаунт</button>
          </div>
        </div>
      </div>
    </Container>
  </div>;
}