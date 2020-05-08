import React, { ReactElement } from "react";
import { SendOutlined } from "@ant-design/icons";
import { formatDateNameAndHour } from "../../utils/format-helper";
import { Message } from "../Message/Message";
import "./Chat.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  SEND_MESSAGE,
  DELETE_MESSAGE,
} from "../../redux/store/chat/chat-types";
import { RootState } from "../../redux/store";
import { Message as Msg } from "../../redux/store/chat/chat-types";
import uuid from "../../utils/id-generator";
import io from "socket.io-client";

interface ChatProps {
  name: string;
  consultant: Boolean;
}

export function Chat({ name, consultant }: ChatProps): ReactElement {
  const dispatch = useDispatch();
  const [message, setMessage] = React.useState("");
  // const [messages, setMessages] = React.useState<Msg[]>([]);
  // Gets the messages from Redux store
  const messages = useSelector((state: RootState) => state.chat.messages);
  // Helper function that build s the Timestamp in the required format
  // 'DD/MM/YY - ‘username’ - HH:MM => ‘mensagem’
  const timestamp: string = formatDateNameAndHour(name);

  // Connects to socket
  const socket = io("http://localhost:8080");

  const updateMsgs = (newMsg: Msg) => {
    dispatch({
      type: SEND_MESSAGE,
      payload: newMsg,
    });
  };

  React.useEffect(() => {
    socket.emit("retrieveMessages");
    socket.on("retrieveMessages", (messages: Msg[]) =>
      dispatch({ type: SEND_MESSAGE, payload: [...messages] })
    );
  }, []);

  React.useEffect(() => {
    socket.on("receivedMessage", (newMessage: Msg) => updateMsgs(newMessage));
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Creates msgObject
    const msgObject = {
      id: uuid(),
      user: name,
      message,
      timestamp,
    };

    if (message.length) {
      socket.emit("sendMessage", msgObject);
      // Sends msg structure to redux store
      dispatch({
        type: SEND_MESSAGE,
        payload: msgObject,
      });
    }
    // cleans input field
    setMessage("");
  };
  const handleDelete = (id: number): void => {
    dispatch({ type: DELETE_MESSAGE, payload: id.toString() });
  };

  return (
    <div className="chat-container">
      <section className="chat-container__messages">
        {messages.length !== 0 ? (
          messages.map((msg: Msg) => (
            <Message
              key={msg.id}
              handleDelete={() => handleDelete(msg.id)}
              message={msg.message}
              timestamp={msg.timestamp}
              consultant={consultant}
            />
          ))
        ) : (
          <h1 className="messages__no-message">No messages yet...</h1>
        )}
      </section>

      <form
        onSubmit={(e) => handleSendMessage(e)}
        className="chat-container__input-container"
      >
        <input
          className="input-container__input"
          placeholder="Insert message..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          required
        />
        <button type="submit" className="input-container__button">
          <SendOutlined />
        </button>
      </form>
    </div>
  );
}
