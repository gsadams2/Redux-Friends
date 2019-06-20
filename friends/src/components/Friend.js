import React, { Component } from "react";

export class Friend extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.friend.name}</h2>
      </div>
    );
  }
}

export default Friend;
