import React from 'react';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);

    this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  render() {
    const { id, body } = this.props.todo;
    return (
      <div>
        { id }:&nbsp;
        { body }
        <button onClick={ this.deleteTodo }>Delete</button>
      </div>
    );
  }
}

export default TodoDetailView;
