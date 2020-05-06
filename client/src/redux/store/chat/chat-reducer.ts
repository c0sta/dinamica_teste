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
      return {
        messages: [...state.messages, action.payload],
      };

    case DELETE_MESSAGE:
      return {
        messages: state.messages.filter(
          (message) => message.timestamp !== action.meta.timestamp
        ),
      };
    default:
      return state;
  }
}