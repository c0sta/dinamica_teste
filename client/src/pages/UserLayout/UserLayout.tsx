import React, { ReactElement } from "react";
import { useParams } from "react-router-dom";
import { Chat, Users, Header } from "../../components/index";

import "./UserLayout.scss";

export function UserLayout(): ReactElement {
  let { name } = useParams();
  // const username = useSelector((state: RootState) => state.session.username);
  return (
    <div className="user-page">
      <Header name={name} />
      <Users />
      <Chat />
    </div>
  );
}
