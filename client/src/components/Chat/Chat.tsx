import React, { ReactElement } from "react";
import { SendOutlined } from "@ant-design/icons";
import "./Chat.scss";

export function Chat(): ReactElement {
  const messages = ["sadfas", "sadfas", "sadfas", "sadfas", "sadfas"];
  // const [message, setMessase] = React.useState("");

  // const handleSendMessage = () => {};

  return (
    <div className="chat-container">
      <section className="chat-container__messages">
        {messages.map((msg) => (
          <h3>{msg}</h3>
        ))}
      </section>
      <section className="chat-container__input-container">
        <input
          className="input-container__input"
          placeholder="Insert message..."
        />
        <button className="input-container__button">
          <SendOutlined />
        </button>
      </section>
    </div>
  );
}
