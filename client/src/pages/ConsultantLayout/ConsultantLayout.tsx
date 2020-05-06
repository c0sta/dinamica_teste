import React, { ReactElement } from "react";
import { Chat, Users, Header } from "../../components/index";
import { useParams } from "react-router-dom";
import "./ConsultantLayout.scss";

export function ConsultantLayout(): ReactElement {
  let { name } = useParams();

  return (
    <div className="consultant-page">
      <Header name={name} consultant={true} />
      <Users />
      <Chat />
    </div>
  );
}
