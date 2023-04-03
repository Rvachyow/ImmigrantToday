import style from "./BlockInfo.module.scss";
import { BlockItem } from "./BlockItem/BlockItem";
import { Container } from "../Container/Container";
import React from "react";
import { ITEMS_BLOCK_PROPS } from "../../types/blockItem";
export const BlockInfo = ({ title, arrayItem, bgColor }: { title?:string, arrayItem:ITEMS_BLOCK_PROPS[], bgColor?: string} ) => {
  const blockRef = React.useRef<HTMLDivElement | any>(null);
  React.useEffect(() => {
    blockRef.current.style.backgroundColor = bgColor;
  },[]);
  
  return <div ref={blockRef} className={style.blockinfo}>
    <Container>
      <div className={style.block_container}>
        <div className={style.block_title}>
          <h2>{title}</h2>
          <h4>Смотреть все</h4>
        </div>
        <div className={style.block_items}>
          {arrayItem?.map((item, index) => <BlockItem key={index} img={item.img} title={item.title}></BlockItem>)}
        </div>
        <img className={style.img_pagin} src="../assets/nav.png" alt="" />
      </div>
    </Container>
  </div>;
};