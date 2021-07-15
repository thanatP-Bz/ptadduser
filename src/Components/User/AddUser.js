import React, { useState } from "react";
import Button from "./Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState();

  const changeUserNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const changeAgeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().lenth === 0 ||
      enteredUserAge.trim().lenth === 0
    ) {
      setError({
        title: "Invalid username",
        message: "Please enter a valid usename",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      /* this one is return a string not a number we should add a plus sign*/
      setError({
        title: "Invalid age",
        message: "Please enter a valid number",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredUserAge);
    setEnteredUserName("");
    setEnteredUserAge("");
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title="An error Occured!"
          message="please enter a vaild number or username"
          onConfirm={errorHandler}
        />
      )}
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
    </div>
  );
};

export default AddUser;
