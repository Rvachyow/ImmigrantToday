import ReactDOM from "react-dom/client";
import { Main } from "./Main";
import "./styles/index.scss";
import "./fonts/semi-bold.ttf";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider store={store}>
    <Main></Main>
  </Provider>,
);
