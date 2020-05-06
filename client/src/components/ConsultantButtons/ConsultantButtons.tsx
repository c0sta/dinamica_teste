import React, { ReactElement } from "react";
import { Tooltip, Input } from "antd";
import { UserAddOutlined, UsergroupAddOutlined } from "@ant-design/icons";

export function ConsultantButtons(): ReactElement {
  const { Search } = Input;

  return (
    <section className="header__consultant">
      <Tooltip
        trigger={["focus"]}
        title="Insert a username or a date"
        placement="topLeft"
      >
        <Search
          placeholder="Search..."
          maxLength={25}
          className="consultant__search"
        />
      </Tooltip>
      <section className="consultant__buttons">
        <button className="consultant__button">
          <Tooltip title="Generate users">
            <UserAddOutlined />
          </Tooltip>
        </button>
        <button className="consultant__button">
          <Tooltip title="Generate groups">
            <UsergroupAddOutlined />
          </Tooltip>
        </button>
      </section>
    </section>
  );
}
