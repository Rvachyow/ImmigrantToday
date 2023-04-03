import style from "./Layout.module.scss";
export const Layout = ({ header, children, footer }: { header:React.ReactNode, children?:React.ReactNode, footer?:React.ReactNode, }) => {
  return <div className={style.layout}>
    <div className={style.wrapper}>
      {header}
      {children}  
      {footer}   
    </div>
</div>;
};