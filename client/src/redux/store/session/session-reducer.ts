import {
  SessionActionTypes,
  SessionState,
  UPDATE_SESSION,
} from "./session-types";

const initialState: SessionState = {
  username: "",
};

export function sessionReducer(
  state = initialState,
  action: SessionActionTypes
): SessionState {
  // DEBUGGIN LIKE A
  console.log(action.payload);
  switch (action.type) {
    case UPDATE_SESSION:
      return {
        username: action.payload.username,
      };
    default:
      return state;
  }
}
