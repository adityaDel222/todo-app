import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px solid #ccc',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  }
  render() {
    const { id, title } = this.props.todo;
    return (
        <div style={ this.getStyle() }>
            <p>
              <input
                type="checkbox"
                style={{ marginRight: '10px' }}
                onChange={ this.props.markComplete.bind(this, id) }
              />
              { title }
              <button
                style={ btnStyle }
                onClick={ this.props.delTodo.bind(this, id) }
              >
                x
              </button>
            </p>
        </div>
    );
  }
}

// PropTypes
TodoItem.propType = {
  todo: PropTypes.object.isRequired
};

const btnStyle = {
  float: 'right',
  padding: '2px 8px',
  backgroundColor: 'hsla(0, 50%, 50%, 1)',
  color: '#fff',
  border: 'none',
  outline: 'none',
  cursor: 'pointer'
};

export default TodoItem;