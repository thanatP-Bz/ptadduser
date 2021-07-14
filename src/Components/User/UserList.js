import React from "react";
import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <div className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key="user.id">
            {/* we will add key props at the li */}
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
