import {
  SessionActionTypes,
  SessionState,
  UPDATE_SESSION,
} from "./session-types";

export function updateSession(newSession: SessionState): SessionActionTypes {
  return {
    type: UPDATE_SESSION,
    payload: newSession,
  };
}
