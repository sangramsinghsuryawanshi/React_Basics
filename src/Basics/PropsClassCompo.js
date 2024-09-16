import React from "react";

class PropClassCompo extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi, {this.props.Name}</h1>
        <h1>Email: {this.props.Email}</h1>
      </div>
    );
  }
}

export default PropClassCompo;
