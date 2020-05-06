export interface SessionState {
  username: string;
}
export const UPDATE_SESSION = "UPDATE_SESSION";

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION;
  payload: SessionState;
}

export type SessionActionTypes = UpdateSessionAction;
