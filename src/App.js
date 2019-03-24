import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput'
import './App.css';
import UserInput from './UserInput/UserInput';

class App extends Component {

  state = {
    sName: 'Sswamiji'
  };

  changeState = (event) => {
    this.setState({sName : event.target.value})
  }

  render() {
    return (
      <div className="App">
        <UserInput 
        inputChangeHandler={this.changeState}
        currentName={this.state.sName}
        ></UserInput>
        <ol>
          <li><UserOutput name={this.state.sName}></UserOutput></li>
          <li><UserOutput name="Probodhswamiji"></UserOutput></li>
        </ol>
      </div>
    );
  }
}

export default App;
