import React from 'react';
import ReactDOM from "react-dom"
import TodoList from './components/TodoComponents/TodoList.js'
import TodoForm from './components/TodoComponents/TodoForm.js'


import "./components/TodoComponents/Todo.css";

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 15288170773454,
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks
    };
  }
  
  addItem = (e, itemName) => {
    e.preventDefault();
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      tasks: [...this.state.tasks, newItem]
    })
  }

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(item => !item.completed)
    })
  }

  toggleItem = itemId => {
    console.log(itemId)
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === itemId) {
          return {...item, completed: !item.completed}
        }
        return item;
      })
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem ={this.addItem} />
        <TodoList 
          tasks={this.state.tasks} 
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
