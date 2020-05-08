import { combineReducers, createStore, applyMiddleware } from "redux";
import { chatReducer } from "./chat/chat-reducer";
import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  chat: chatReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
