import { useState } from "react";

function Map3() {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Cherry"]);

  // Function to add a new fruit
  const addFruit = () => {
    setFruits([...fruits, "Mango"]);
  };

  return (
    <div>
      <h3>Fruits List</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <button onClick={addFruit}>Add Mango</button>
    </div>
  );
}

export default Map3;
