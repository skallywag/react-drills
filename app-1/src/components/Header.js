import React from "react";
import { useState } from "react";
// import React, { Component } from "react";
import "./header.css";

function Header() {
  const [value, setValue] = useState("");

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <div className="tracker-con">
      <h1>Tracking state!</h1>
      <input
        onChange={(e) => handleChange(e.target.value)}
        type="text"
        placeholder="tracker"
      />
      <p>{value}</p>
    </div>
  );
}

// Class Component

// class Header extends Component {
//   constructor() {
//     super();

//     this.state = {
//       message: "",
//     };
//   }

//   handleChange(value) {
//     this.setState({ message: value });
//   }

//   render() {
//     return (
//       <div className="tracker-con">
//         <input
//           onChange={(e) => this.handleChange(e.target.value)}
//           type="text"
//         />
//         <p>{this.state.message}</p>
//       </div>
//     );
//   }
// }

export default Header;
