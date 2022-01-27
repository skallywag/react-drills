import React from "react";
import { useState } from "react";

function Login() {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");

  function handleUserNameChange(value) {
    setUserName(value);
  }

  function handlePassChange(value) {
    setUserPass(value);
  }

  function handleSubmit() {
    alert(`username: ${userName} : password: ${userPass}`);
  }

  return (
    <div className="App">
      <h1>login page</h1>
      <input
        onChange={(e) => handleUserNameChange(e.target.value)}
        placeholder="username"
        type="text"
      />
      <input
        onChange={(e) => handlePassChange(e.target.value)}
        placeholder="password"
        type="password"
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

// class Login extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       userName: "",
//       password: "",
//     };
//   }

//   render() {
//     const userNameHandler = (value) => {
//       this.setState({ userName: value });
//     };
//     const passwordHandler = (value) => {
//       this.setState({ password: value });
//     };

//     const alert = (user) => {};

//     return (
//       <div className="App">
//         <input onChange={(e) => userNameHandler(e.target.value)} type="text" />
//         <input
//           onChange={(e) => passwordHandler(e.target.value)}
//           type="password"
//         />
//         <button onClick={() => alert(this.state.userName, this.state.password)}>
//           login
//         </button>
//       </div>
//     );
//   }
// }

export default Login;
