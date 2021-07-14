import React, { useState } from "react";
import Button from "./Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");

  const changeUserNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const changeAgeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().lenth === 0 ||
      enteredUserAge.trim().lenth === 0
    ) {
      return;
    }
    if (+enteredUserAge < 1) {
      /* this one is return a string not a number we should add a plus sign*/
      return;
    }
    props.onAddUser(enteredUserName, enteredUserAge);
    setEnteredUserName("");
    setEnteredUserAge("");
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input
          id="username"
          type="text"
          value={enteredUserName || ""}
          onChange={changeUserNameHandler}
        />
        <label htmlFor="">Add Age</label>
        <input
          id="age"
          type="number"
          value={enteredUserAge || ""}
          onChange={changeAgeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
