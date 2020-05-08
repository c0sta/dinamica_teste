export const SEND_MESSAGE = "SEND_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

export interface Message {
  id: number;
  user: string;
  message: string;
  timestamp: string;
}

export interface ChatState {
  messages: Message[];
}

interface SendMessageAction {
  type: typeof SEND_MESSAGE;
  payload: Message;
}

interface DeleteMessageAction {
  type: typeof DELETE_MESSAGE;
  payload: {
    id: number;
  };
}

export type ChatActionsTypes = SendMessageAction | DeleteMessageAction;
