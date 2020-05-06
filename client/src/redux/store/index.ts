import { combineReducers, createStore, applyMiddleware } from "redux";
import { sessionReducer } from "./session/session-reducer";
import { chatReducer } from "./chat/chat-reducer";
import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  session: sessionReducer,
  chat: chatReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
