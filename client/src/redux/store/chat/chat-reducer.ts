import {
  ChatState,
  ChatActionsTypes,
  DELETE_MESSAGE,
  SEND_MESSAGE,
} from "./chat-types";

const initialState: ChatState = {
  messages: [],
};

export function chatReducer(
  state = initialState,
  action: ChatActionsTypes
): ChatState {
  switch (action.type) {
    case SEND_MESSAGE:
      let index = state.messages.findIndex((el) => el.id === action.payload.id); // Dont let add duplicate msgs
      if (index === -1)
        return {
          messages: [...state.messages, action.payload],
        };
      return state;
    case DELETE_MESSAGE:
      return {
        messages: state.messages.filter(
          (message) => message.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
