import React, { ReactElement } from "react";
import { Popover, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import "./Message.scss";

interface MessageProps {
  handleDelete: () => void;
  timestamp: string;
  message: string;
  consultant: Boolean;
}

export function Message({
  handleDelete,
  message,
  timestamp,
  consultant,
}: MessageProps): ReactElement {
  const [visible, setVisible] = React.useState(false);

  const MessageComponent = () => (
    <button onFocus={() => setVisible(!visible)} className="message-container">
      <span className="message-container__timestamp">{timestamp}</span>
      <p className="message-container__message">{message}</p>
    </button>
  );
  const PopoverContent = () => (
    <Button onClick={handleDelete} type="dashed" danger>
      Delete message &nbsp; <DeleteOutlined />
    </Button>
  );
  return (
    <>
      {!consultant ? (
        <MessageComponent />
      ) : (
        <Popover
          trigger="hover"
          visible={visible}
          onVisibleChange={(visibility) => setVisible(visibility)}
          content={PopoverContent}
        >
          <MessageComponent />
        </Popover>
      )}
    </>
  );
}
