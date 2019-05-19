import React from "react";
import style from "./Title.css";

const Title = props => (
  <div className={style.appTitle}>
    <h1>{props.title}</h1>
    <p>Todo tasks no: {props.tasksNumber}</p>
  </div>
);

export default Title;
