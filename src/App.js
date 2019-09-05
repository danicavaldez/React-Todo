import React from 'react';
import ReactDOM from "react-dom"
import TodoList from './components/TodoComponents/TodoList.js'

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
        <input />
        <TodoList 
          tasks={this.state.tasks} 
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
