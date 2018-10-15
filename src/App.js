import React, { Component } from 'react';
import './App.css';
import firebase from './components/firebase';

import TodoItem from './components/TodoItem';

const dbRef = firebase.database().ref('todoItems');
// const dbRef = firebase.database().ref();

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [],
      todoItem: ""
    };
  }

  componentDidMount() {
    dbRef.on('value', snapshot => {

      const data = snapshot.val();
      
      if(data !== null) {
        const newState = Object.keys(data).map(key => {
          
          return {
            key,
            data: data[key]
          }
        });

        this.setState({ todoItems: newState })

      }
    });
  }
  
  handleSubmit = e => {
    e.preventDefault();

    if(this.state.todoItem.length === 0) {
      return; 
    }
    
    const newTodo = {
      value: this.state.todoItem,
      completed: false
    }

    // Removing as now location will be firebase:
    // // get copy of todoItems
    // // Ryan's recommendation
    // const todoItems = Array.from(this.state.todoItems);
    // // Add new item to the clone
    // todoItems.push(newTodo);

    // Pushes new todo to firebase
    dbRef.push(newTodo);

    // set todoItems in state to the copy of todoItems and reset todoItem to an empty string so that additional items can be added
    this.setState({ todoItem: "" })
  }

  handleChange = e => {

    // [e.target.name] grabs the name of the traget, which is set in the jsx as a name attribute and matches the key in the state object
    // could have been written as the following if handleChange was only going to be used on one input this.setState({ todoItem: e.target.value })
    // since it will be used on more that one input [e.target.name] allows handleChange to be a more flexible method
    this.setState({ [e.target.name]: e.target.value })
  }

  toggleCompleted = keyClicked => {
    
    dbRef.child(keyClicked).once('value', snapshot => {
      console.log(snapshot.val());

      const data = snapshot.val();

      dbRef.child(keyClicked).update({ completed: data.completed === false ? true : false });
    });
  }
  
  render() {
    return (
      <div className="App">
       
        <header className="App-header">
          <h1>To Do App Oct 12 2018</h1>
        </header>
        
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="todoItem">To Do Item</label>
          <input
            id="todoItem" 
            name="todoItem" 
            type="text"
            value={this.state.todoItem}
            onChange={this.handleChange}
          />
          
          <button>Submit</button>
        </form>

        <ul>
          {this.state.todoItems.map(item => {
            return <TodoItem 
              key={item.key} 
              todo={item}
              toggleCompleted={this.toggleCompleted}
            />
          })}
        </ul>

      </div>
    );
  }
}

export default App;
