import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: []
    };
  }
  
  handleSubmit(e) {
    e.preventDefault();
    
    console.log(`submitted`);
  }
  
  render() {
    return (
      <div className="App">
       
        <header className="App-header">
          <h1>To Do App Oct 12 2018</h1>
        </header>
        
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="todo-item">To Do Item</label>
          <input id="todo-item" name="todo-item" type="text"/>
          
          <button>Submit</button>
        </form>

        <ul>
          <li>Item1</li>
        </ul>

      </div>
    );
  }
}

export default App;
