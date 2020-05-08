import React, { ReactElement } from "react";
import { Tooltip, Input } from "antd";
import {
  UserAddOutlined,
  UsergroupAddOutlined,
  UserDeleteOutlined,
} from "@ant-design/icons";
import { api } from "../../services/api";
import { UserContext } from "../../context/UserContext";
export function ConsultantButtons(): ReactElement {
  const { usersDispatch } = React.useContext(UserContext);

  const { Search } = Input;

  const handleGenerateUsers = () => {
    api
      .get("generate-users")
      .then((resp) =>
        usersDispatch({ type: "ADD_USERS", payload: resp.data.users })
      );
  };
  const handleDeleteUsers = () => {
    api.get("delete-users");
    usersDispatch({ type: "DELETE_USERS" });
  };

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
        <button
          className="consultant__button --delete"
          onClick={handleDeleteUsers}
        >
          <Tooltip title="Delete users">
            <UserDeleteOutlined />
          </Tooltip>
        </button>
        <button className="consultant__button" onClick={handleGenerateUsers}>
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
