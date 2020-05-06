import { combineReducers } from "redux";
import { sessionReducer } from "./session/session-reducer";
import { chatReducer } from "./chat/chat-reducer";

export const rootReducer = combineReducers({
  session: sessionReducer,
  chat: chatReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
