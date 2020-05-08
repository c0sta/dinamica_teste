import React, { useReducer } from "react";
import Routes from "./routes/routes";
import { store } from "./redux/store/index";
import { Provider } from "react-redux";
import "./styles/_global.scss";
import { UserContext } from "./context/UserContext";
import { GroupContext } from "./context/GroupContext";
import {
  usersReducer,
  initialState as userInitialState,
} from "./context/UserReducer";
import {
  groupsReducer,
  initialState as groupsInitialState,
} from "./context/GroupReducer";

const App: React.FC = () => {
  const [usersState, usersDispatch] = useReducer(
    usersReducer,
    userInitialState
  );
  const [groupsState, groupsDispatch] = useReducer<any>(
    groupsReducer,
    groupsInitialState
  );
  return (
    <Provider store={store}>
      <GroupContext.Provider value={{ groupsState, groupsDispatch }}>
        <UserContext.Provider value={{ usersState, usersDispatch }}>
          <Routes />
        </UserContext.Provider>
      </GroupContext.Provider>
    </Provider>
  );
};

export default App;
