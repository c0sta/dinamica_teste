import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import { Input, Button } from "antd";
import { useDispatch } from "react-redux";
import "./Login.scss";
import { UPDATE_SESSION } from "../../redux/store/session/session-types";

export function Login(): ReactElement {
  const dispatch = useDispatch();
  const [name, setName] = React.useState("");

  const handleClick = () => {
    dispatch({ type: UPDATE_SESSION, payload: name });
    console.log(name);
  };
  // const username = useSelector((state: RootState) => state.session.username);

  return (
    <div className="login">
      <section className="login__container">
        <img className="container__logo" src={logo} alt="Company logo" />
        <Input
          className="container__input"
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Username"
          size="large"
        />
        <Button
          onClick={handleClick}
          className="container__button"
          size="large"
          type="primary"
        >
          <Link to={`/app/user/${name || "guest"}`}>Sign In</Link>
        </Button>

        <Link
          className="container__button --small"
          to={`/app/consultant/${name || "guest"}`}
        >
          Sign In as Consultant
        </Link>
      </section>
    </div>
  );
}
