import React, { useState } from "react";
import AddUser from "./Components/User/AddUser";
import UserList from "./Components/User/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  }; /* add the function which expect 2 paramiters */
  return (
    <div>
      <AddUser onAddUser={addUserHandler} /> {/* add a props here */}
      <UserList users={userList} />
      {/* here we have to set a users props */}
    </div>
  );
}

export default App;
