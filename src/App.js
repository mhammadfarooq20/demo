// import React, { useState } from "react";

// const App = () => {
//   const [variable, setVariable] = useState(0);
//   function increaseValue() {
//     setVariable(variable + 1);
//   }
//   function decreaseValue() {
//     setVariable(variable - 1);
//   }
//   return (
//     <>
//       <div>
//         <h1 style={{ padding: "20px" }}>{variable}</h1>
//         <button onClick={increaseValue}>Increase</button>
//         <button onClick={decreaseValue}>Decrease </button>
//       </div>
//     </>
//   );
// };

// export default App;

import React, { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["cat", "dog", "cow", "bird", "horse", "gator"];
  return animals[Math.floor(Math.random() * animals.length)];
}
const App = () => {
  const [animal, setAnimal] = useState([]);
  function handleClick() {
    setAnimal([...animal, getRandomAnimal()]);
  } 
  const updatedAnimals = animal.map((animal, index) =>{
    return <AnimalShow type={animal} key={index} />
  })
  return (
    <>
      <div>
        <button onClick={handleClick}>Add Animal</button>
        {updatedAnimals}
      </div>
    </>
  );
};

export default App;
