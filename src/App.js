import React from 'react';

const todo = [
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
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <input />
        <button>To Do</button>
        <button>Clear Completed</button>
      </div>
    );
  }
}

export default App;
