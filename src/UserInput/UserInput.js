import React, { Component } from 'react';

class UserInput extends Component {
    style = {
        color : "red"
    }
  render() {
    return (
      <div>
          <input type='text' onChange={this.props.inputChangeHandler} value={this.props.currentName} style={this.style}></input>
      </div>
    );
  }
}

export default UserInput;
