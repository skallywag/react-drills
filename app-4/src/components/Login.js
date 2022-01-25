import React from "react";
import { useState } from "react";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: "",
      password: "",
    };
  }

  render() {
    const userNameHandler = (value) => {
      this.setState({ userName: value });
    };
    const passwordHandler = (value) => {
      this.setState({ password: value });
    };

    const alert = (user) => {};

    return (
      <div className="App">
        <input onChange={(e) => userNameHandler(e.target.value)} type="text" />
        <input
          onChange={(e) => passwordHandler(e.target.value)}
          type="password"
        />
        <button onClick={() => alert(this.state.userName, this.state.password)}>
          login
        </button>
      </div>
    );
  }
}

export default Login;
