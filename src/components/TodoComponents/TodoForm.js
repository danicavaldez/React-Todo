import React from 'react';

class TodoForm extends React.Component {
  constructor(){
    super();
    this.state = {
      itemName: ""
    };
  }


  handleChanges = e => {
    this.setState({ itemName: e.target.value });
  };

  handleSubmit = e => {
    this.props.addItem(e, this.state.itemName)
    this.setState({ itemName: "" });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        {}
        <input 
        type ="text" 
        name="item"
        value={this.state.itemName}
        onChange={this.handleChanges}
        />
        <button>Add Todo</button>
      </form>
    )
  }
}

export default TodoForm;