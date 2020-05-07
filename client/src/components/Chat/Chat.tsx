import React, { ReactElement } from "react";
import { SendOutlined } from "@ant-design/icons";
import { formatDateNameAndHour } from "../../utils/format-helper";
import { Message } from "../Message/Message";
import "./Chat.scss";
import { useDispatch, useSelector } from "react-redux";
import { SEND_MESSAGE } from "../../redux/store/chat/chat-types";
import { RootState } from "../../redux/store";
import io from "socket.io-client";

interface ChatProps {
  name: string;
}

export function Chat({ name }: ChatProps): ReactElement {
  const dispatch = useDispatch();
  const [message, setMessage] = React.useState("");
  // Gets the messages from Redux store
  const messages = useSelector((state: RootState) => state.chat.messages);
  // Helper function that build s the Timestamp in the required format
  // 'DD/MM/YY - ‘username’ - HH:MM => ‘mensagem’
  const timestamp: string = formatDateNameAndHour(name);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    io("http://localhost:8080");
    dispatch({
      type: SEND_MESSAGE,
      payload: { user: name, message, timestamp },
    });
    // cleans input fieeld
    setMessage("");
  };

  return (
    <div className="chat-container">
      <section className="chat-container__messages">
        {messages.length !== 0 ? (
          messages.map((msg, index) => (
            <Message
              key={index}
              message={msg.message}
              timestamp={msg.timestamp}
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
        />
        <button type="submit" className="input-container__button">
          <SendOutlined />
        </button>
      </form>
    </div>
  );
}
