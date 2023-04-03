import style from "./BlockItem.module.scss";
export const BlockItem = ({ title, img }: { title:string, img:string}) => {
  return <div className={style.blockitem}>
    <img src={img} alt="" />
    <div className={style.block_title}>{title}</div>
  </div>;
};