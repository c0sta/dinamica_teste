import React from "react";
import Routes from "./routes/routes";
import { rootReducer } from "./redux/store/index";
import { Provider } from "react-redux";
import { createStore } from "redux";

const App: React.FC = () => {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
