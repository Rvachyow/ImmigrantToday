import style from "./Main.module.scss";
import { HelpImigration } from "../../componets/HelpImigration/HelpImigration";
import { Popular } from "../../componets/Popular/Popular";
import { BlockInfo } from "../../componets/BlockInfo/BlockInfo";
import { HowStart } from "../../componets/HowStart/HowStart";
import { AboutProject } from "../../componets/AboutProject/AboutProject";
import { HowAdd } from "../../componets/HowAdd/HowAdd";
import { 
  BLOCK_ITEM_IMIGRATION, 
  BLOCK_ITEM_STUDY, 
  BLOCK_ITEM_VISI, 
  BLOCK_ITEM_WORK } from "../../componets/BlockInfo/constants";
export const Main = () => {
  return <div className={style.main}>
    <HelpImigration></HelpImigration>
    <Popular></Popular>
    <BlockInfo arrayItem={BLOCK_ITEM_IMIGRATION} bgColor="#F7F7F7" title="Иммиграция"></BlockInfo>
    <HowStart></HowStart>
    <BlockInfo arrayItem={BLOCK_ITEM_STUDY} bgColor="#F7F7F7" title="Учеба"></BlockInfo>
    <BlockInfo arrayItem={BLOCK_ITEM_WORK}  title="Работа"></BlockInfo>
    <BlockInfo arrayItem={BLOCK_ITEM_VISI}  title="Визы" bgColor="#F7F7F7"></BlockInfo>
    <AboutProject></AboutProject>
    <HowAdd></HowAdd>
  </div>;
};