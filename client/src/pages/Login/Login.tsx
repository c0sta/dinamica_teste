import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import { Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import "./Login.scss";
import { RootState } from "../../redux/store";

export function Login(): ReactElement {
  const username = useSelector((state: RootState) => state.session.username);
  const dispatch = useDispatch();
  console.log("name from initialState ->", username);
  const handleClick = (username: string) => {};
  return (
    <div className="login">
      <section className="login__container">
        <img className="container__logo" src={logo} alt="Company logo" />
        <Input
          className="container__input"
          type="text"
          onChange={(e) => handleClick(e.target.value)}
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
