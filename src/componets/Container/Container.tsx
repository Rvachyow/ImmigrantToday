import style from "./Container.module.scss";
export const Container = ({ children }: { children?: React.ReactNode }) => {
  return <div className={style.container}>
    {children}
  </div>;
};