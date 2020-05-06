import React, { ReactElement } from "react";
import { LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ConsultantButtons } from "../index";
import "./Header.scss";

interface HeaderProps {
  name: string;
  consultant: Boolean;
}

export function Header({ name, consultant }: HeaderProps): ReactElement {
  return (
    <div className="header">
      <Link to="/" className="header__button">
        <LogoutOutlined />
      </Link>
      Welcome, &nbsp;<span className="--bold"> {name}!</span>
      {!consultant ? null : <ConsultantButtons />}
    </div>
  );
}
