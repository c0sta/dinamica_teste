import React, { ReactElement } from "react";

import "./Message.scss";

interface MessageState {
  timestamp: string;
  message: string;
}

export function Message({ message, timestamp }: MessageState): ReactElement {
  return (
    <div className="message-container">
      <span className="message-container__timestamp">{timestamp}</span>
      <p className="message-container__message">{message}</p>
    </div>
  );
}
