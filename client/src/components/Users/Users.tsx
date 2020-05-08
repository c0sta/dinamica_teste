import React, { ReactElement } from "react";
import { api } from "../../services/api";
import "./Users.scss";
import { UserContext } from "../../context/UserContext";

interface UserState {
  id: number;
  name: string;
  timestamp: Date;
}

export function Users(): ReactElement {
  const { usersState, usersDispatch } = React.useContext(UserContext);
  const { users } = usersState;
  React.useEffect(() => {
    if (users === [])
      api.get("users").then((resp) => {
        usersDispatch({ type: "ADD_USERS", payload: resp.data });
      });
  }, [usersDispatch, users]);

  return (
    <ul className="users-list">
      {!users.length ? (
        <li className="users-list__no-users">No users online...</li>
      ) : (
        users.map((user: UserState) => (
          <li key={user.id} className="users-list__user">
            {user.name}
          </li>
        ))
      )}
    </ul>
  );
}
