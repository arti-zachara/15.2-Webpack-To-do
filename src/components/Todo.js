import React from "react";
import style from "./Todo.css";

const Todo = props => {
  return (
    <li id={props.id}>
      {props.text}
      <button
        className={style.removeItem}
        onClick={() => props.remove(props.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Todo;
