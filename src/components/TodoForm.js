import React from 'react';

class TodoForm extends React.Component {
  componentDidMount() {
    this.todos = this.props.model;
  }

  createTodo(event) {
    event.preventDefault();
    console.log("i live in create todo");
    let newTitle = this.refs.newTitle.value;
    this.todos.addResource({
      title: newTitle,
      completed: false
    });
  }

  render(){
    return(
      <div>
        <form onSubmit={this.createTodo.bind(this)}>
            <p> title
              <input type="text" ref="newTitle" placeholder="title"/>
            </p>
            <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
