export const initialState = {
  groups: [],
};

export function groupsReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_GROUP":
      return {
        groups: [...state, action.payload],
      };
    case "DELETE_GROUPS":
      return {
        groups: [],
      };
  }
}
