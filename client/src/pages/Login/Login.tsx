import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import { Input, Button } from "antd";
import "./Login.scss";

export function Login(): ReactElement {
  const [name, setName] = React.useState("");

  return (
    <div className="login">
      <form className="login__container">
        <img className="container__logo" src={logo} alt="Company logo" />
        <Input
          className="container__input"
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Username"
          required={true}
        />
        <Button
          className="container__button"
          size="large"
          type="primary"
          htmlType="submit"
        >
          <Link to={`/app/user/${name || "userGuest"}`}>Sign In</Link>
        </Button>

        <Link
          className="container__button --small"
          to={`/app/consultant/${name || "consultantGuest"}`}
        >
          Sign In as Consultant
        </Link>
      </form>
    </div>
  );
}
