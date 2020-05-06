/** Type constants */
export const UPDATE_SESSION = "UPDATE_SESSION";

// The session state interface
export interface SessionState {
  username: string;
}
// Session action type
interface UpdateSessionAction {
  type: typeof UPDATE_SESSION;
  payload: SessionState;
}

export type SessionActionTypes = UpdateSessionAction;
