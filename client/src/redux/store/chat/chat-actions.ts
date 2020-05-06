import {
  Message,
  SEND_MESSAGE,
  DELETE_MESSAGE,
  ChatActionsTypes,
} from "./chat-types";

export function sendMessage(newMessage: Message): ChatActionsTypes {
  return {
    type: SEND_MESSAGE,
    payload: newMessage,
  };
}

export function deleteMessage(timestamp: Date): ChatActionsTypes {
  return {
    type: DELETE_MESSAGE,
    meta: {
      timestamp,
    },
  };
}
