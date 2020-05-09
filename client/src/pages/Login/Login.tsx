import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import image from "../../assets/img-01.png";
// import image from "../../assets/logo.jpeg";

import { Input, Button } from "antd";
import "./Login.scss";

export function Login(): ReactElement {
  const [name, setName] = React.useState("");

  return (
    <div className="login">
      <form className="login__container">
        <h1 className="container__title">Login</h1>
        <Input
          className="container__input"
          type="text"
          onChange={(e) => setName(e.target.value)}
          size="large"
          placeholder="Username"
          required={true}
          prefix={<UserOutlined className="input__icon" />}
        />
        <Button
          className="container__button"
          size="large"
          type="primary"
          htmlType="submit"
          shape="round"
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
      <section className="login__image">
        <img
          className="image__logo"
          src={image}
          alt="Notebook and lumninary'"
        />
      </section>
    </div>
  );
}
