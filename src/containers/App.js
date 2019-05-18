import React from "react";
import uuid from "uuid";
// ----------------- imports end ------------------------

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
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
    return <div className={style.TodoApp}>app's components</div>;
  }
}

// ----------------- exports part below ------------------------

export default App;
