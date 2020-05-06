import {
  SessionActionTypes,
  SessionState,
  UPDATE_SESSION,
} from "./session-types";

const initialState: SessionState = {
  username: "guest",
};

export function sessionReducer(
  state = initialState,
  action: SessionActionTypes
): SessionState {
  switch (action.type) {
    case UPDATE_SESSION: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
