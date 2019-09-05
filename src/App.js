import React from 'react';
import ReactDOM from "react-dom"
import TodoList from './components/TodoComponents/TodoList.js'

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
