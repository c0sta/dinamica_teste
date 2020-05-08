export const initialState = {
  users: [],
};

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_USERS":
      return {
        users: action.payload,
      };
    case "DELETE_USERS":
      return {
        users: [],
      };
  }
}
