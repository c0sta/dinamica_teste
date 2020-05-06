import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import { Input, Button } from "antd";

import "./Login.scss";
export function Login(): ReactElement {
  return (
    <div className="login">
      <section className="login__container">
        <img className="container__logo" src={logo} alt="Company logo" />
        <Input
          className="container__input"
          type="text"
          onChange={(e) => console.log(e)}
          placeholder="Username"
          size="large"
        />
        <Button className="container__button" size="large" type="primary">
          <Link to="/app/user">Sign In</Link>
        </Button>

        <Link className="container__button --small" to="/app/consultant">
          Sign In as Consultant
        </Link>
      </section>
    </div>
  );
}
