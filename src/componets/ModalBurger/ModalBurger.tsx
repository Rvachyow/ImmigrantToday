import style from "./ModalBurger.module.scss";
import React from "react";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getWeather } from "../../redux/slices/weatherSlice";
export const ModalBurger = ({ items, img, text, isWeather }: { items:Array<any>, img?:string, 
  text?: string, isWeather?:boolean}) => {

  const dispatch = useAppDispatch();
  const weatherData = useAppSelector((state) => state.weather.items);
  
  const [ toggle, setToggle ] = React.useState(false);
  const burgerRef = React.useRef<HTMLDivElement | null>(null);
  const [ title, setTitle ] = React.useState(items[0]);

  React.useEffect(() => {
    dispatch(getWeather("moscow"));
  },[]);

  const handleToggle = () => {
    setToggle(!toggle);
    setTimeout(() => document.body.addEventListener("click", handleOutSideClick), 100);
  };
  const handleOutSideClick = (e:any) => {
    const path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(burgerRef.current)) {
      setToggle(false);
    };
    document.body.removeEventListener("click", handleOutSideClick);
  };
  const targetItemModal = (item:any) => {
    setTitle(item);
    setToggle(false);
    if (isWeather) {
      dispatch(getWeather(item));
    }
  };
  
  return <>
    <img src={img} alt={text} />
    <div onClick={handleToggle} className={style.top_nav_text}>{isWeather? weatherData?.current?.temp_c + "°C," : null}{title}</div>
    <div className={style.modal_img}>
      <img 
        onClick={handleToggle} className={clsx(style.img,{[style.img_active]:toggle})} src="./assets/v.png" alt="" />
      <div ref={burgerRef} className={clsx(style.modal, {[style.modal_active]:toggle})}>
        {toggle? <>{items?.map(item => 
          <div className={style.item_container}><div onClick={() => targetItemModal(item)} className={clsx(style.modal_item, 
            {[style.modal_item_active]:toggle})}>{item}
          </div><div className={style.line}></div></div>)}</> : null}
      </div>
    </div></>;
};