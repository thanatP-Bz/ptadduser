import React from "react";
import classes from "./ErrorModal.module.css";
import Button from "../User/Button";
import Card from "../UI/Card";

const ErrorModal = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onConfirm}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>close</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
