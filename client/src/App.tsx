import React from "react";
import Routes from "./routes/routes";
import { store } from "./redux/store/index";
import { Provider } from "react-redux";
import "./styles/_global.scss";
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
