import style from "./MobileSearch.module.scss";
import { Container } from "../../Container/Container";
export const MobileSearch = ({ toggle }: { toggle:any }) => {
  
  return <div className={style.mobile_search}>
    <Container>
      <div className={style.search_container}>
        <input type="text" />
        <div className={style.btn_back}>
          <img src="./assets/loap.png" alt="" />
        </div>
        <div onClick={toggle} className={style.btn_back}>
          <img src="./assets/X.png" alt="" />
        </div>
      </div>
    </Container>
  </div>;
};