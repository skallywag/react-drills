import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [cars, setCars] = useState([
    "mustang",
    "camaro",
    "corvette",
    "subaru",
    "mustang",
  ]);
  const [filterString, setFilterString] = useState("");

  const handleChange = (filterString) => {
    setFilterString(filterString);
  };

  const carList = cars
    .filter((car) => {
      return car.includes(filterString);
    })
    .map((car) => {
      return <h2>{car}</h2>;
    });

  return (
    <div className="App-header">
      <div className="App">
        <h1>Car Filter</h1>
        <input onChange={(e) => handleChange(e.target.value)} type="text" />
        {carList}
      </div>
    </div>
  );
}

// Class Component

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       filterString: "",
//       cars: ["mustang", "camaro", "corvette", "subaru"],
//     };
//   }

//   handleChange(filter) {
//     this.setState({ filterString: filter });
//   }

//   render() {
//     let carList = this.state.cars
//       .filter((element) => {
//         return element.includes(this.state.filterString);
//       })
//       .map((element, index) => {
//         return <h2 key={index}>{element}</h2>;
//       });

//     return (
//       <div className="App-header">
//         <div className="App">
//           <input
//             onChange={(e) => this.handleChange(e.target.value)}
//             type="text"
//           />
//           {carList}
//         </div>
//       </div>
//     );
//   }
// }

export default App;
