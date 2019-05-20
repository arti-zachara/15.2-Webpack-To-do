import React from "react";
import uuid from "uuid";
import style from "./App.css";
import Title from "../components/Title";
import TodoList from "./TodoList";
// ----------------- imports end ------------------------

class App extends React.Component {
  constructor(props) {
    super(props);
    // set start state
    this.state = {
      data: [
        {
          id: 1,
          text: "Clean room"
        },
        {
          id: 2,
          text: "Wash the dishes"
        },
        {
          id: 3,
          text: "Feed my cat"
        }
      ]
    };
  }

  // method: add new todo record
  addTodo(val) {
    const todo = {
      text: val,
      id: uuid.v4()
    };
    const data = [...this.state.data, todo];
    this.setState({ data });
  }

  // method: remove todo record by filtering not to include given id
  removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({ data: remainder });
  }

  render() {
    // style.TodoApp - loader css
    return (
      <div className={style.TodoApp}>
        <Title
          title="Webpack practice: ToDo app"
          tasksNumber={this.state.data.length}
        />
        <TodoList data={this.state.data} remove={this.removeTodo.bind(this)} />
      </div>
    );
  }
}

// ----------------- exports part below ------------------------

export default App;
