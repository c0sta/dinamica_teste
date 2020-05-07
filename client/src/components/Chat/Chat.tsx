import React, { ReactElement } from "react";
import { SendOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { formatDateNameAndHour } from "../../utils/format-helper";
import { Message } from "../Message/Message";
import "./Chat.scss";
import { useDispatch, useSelector } from "react-redux";
import { SEND_MESSAGE } from "../../redux/store/chat/chat-types";
import { RootState } from "../../redux/store";

interface ChatProps {
  name: string;
}

export function Chat({ name }: ChatProps): ReactElement {
  const [message, setMessage] = React.useState("");
  const messages = useSelector((state: RootState) => state.chat.messages);
  const dispatch = useDispatch();
  const messageFormated: string = formatDateNameAndHour(name);

  const handleSendMessage = () => {
    dispatch({
      type: SEND_MESSAGE,
      payload: { user: name, message, timestamp: messageFormated },
    });
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

      <section className="chat-container__input-container">
        <input
          className="input-container__input"
          placeholder="Insert message..."
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="input-container__button" onClick={handleSendMessage}>
          <SendOutlined />
        </button>
      </section>
    </div>
  );
}
