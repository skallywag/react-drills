import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [cars, setCars] = useState([
    "mustang",
    "gaymaro",
    "corvette",
    "subaru",
  ]);
  // console.log(cars);
  const carList = cars.map((car) => {
    return <h2>{car}</h2>;
  });
  return (
    <>
      <div className="App">
        <h2>{carList}</h2>
      </div>
    </>
  );
}

// Class Component

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       cars: ["mustang", "gaymaro", "subaru", "corvette"],
//     };
//   }

//   render() {
//     const carList = this.state.cars.map((car) => {
//       return <h2>{car}</h2>;
//     });

//     return <div className="App">{carList}</div>;
//   }
// }

export default App;
