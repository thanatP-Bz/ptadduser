import React from "react";

const UserList = (props) => {
  return (
    <ul>
      {props.user.map((user) => (
        <li>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
  );
};

export default UserList;
