import React, { Component } from 'react';
import './UserOutput.css';

class UserOutput extends Component {
  render() {
    return (
      <div class='UO'>
          <p>He prabhu- {this.props.name} tara bade jivvu che, tara gamatama jivvu che, ne tari rite jivvu che</p>
          <p>bad ne budhhiyog apo j j j</p>
      </div>
    );
  }
}

export default UserOutput;
