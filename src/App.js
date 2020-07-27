import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import About from './components/pages/About';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import {v4 as uuidv4 } from 'uuid';
import './App.css';

class App extends Component {
  state = {
    todos: [
      { id: uuidv4(), title: 'Take out the trash', completed: false },
      { id: uuidv4(), title: 'Dinner with mum', completed: false },
      { id: uuidv4(), title: 'Meeting with boss', completed: false }
    ]
  }

  // Toggle Complete
  markComplete = id => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  // Delete Item
  delTodo = id => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  // Add Item
  addToto = title => {
    const newTodo = { id: uuidv4(), title: title, completed: false };
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={ this.addToto } />
                <Todos
                  todos={this.state.todos}
                  markComplete={ this.markComplete }
                  delTodo={ this.delTodo }
                />
              </React.Fragment>
            )} />
            <Route path="/about" component={ About } />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;