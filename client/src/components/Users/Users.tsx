import React, { ReactElement } from "react";
import { api } from "../../services/api";
import "./Users.scss";

interface UserState {
  id: number;
  name: string;
  timestamp: Date;
}

export function Users(): ReactElement {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    api.get("users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <ul className="users-list">
      {users ? (
        users.map((user: UserState) => (
          <li key={user.id} className="users-list__user">
            {user.name}
          </li>
        ))
      ) : (
        <p>Nenhum usuário online</p>
      )}
    </ul>
  );
}
