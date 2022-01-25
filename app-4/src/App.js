import React from "react";
import Login from "./components/Login";
import "./App.css";

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

// Class Component

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <Login />;
  }
}

export default App;
