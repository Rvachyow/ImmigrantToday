import { Footer } from "../componets/Footer/Footer";
import { Header } from "../componets/Header/Header";
import { Layout } from "../componets/Layout/Layout";
import { Main } from "../paiges/Main/Main";

export const Imigrant = () => {
  return <Layout footer={<Footer/>} header={<Header/>}>
    <Main></Main>
  </Layout>;
};