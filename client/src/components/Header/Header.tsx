import React, { ReactElement } from "react";
import "./Header.scss";
import {
  LogoutOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Input, Tooltip } from "antd";

interface HeaderProps {
  name: string;
}

export function Header({ name }: HeaderProps): ReactElement {
  const { Search } = Input;
  return (
    <div className="header">
      <Link to="/" className="header__button">
        <LogoutOutlined />
      </Link>
      Welcome, &nbsp;<span className="--bold"> {name}!</span>
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
    </div>
  );
}
