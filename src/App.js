import React, { useState, useEffect } from "react";
import AppBar from "./Components/AppBar";
import Table from "./Components/Table";
import {getAvailablePets} from "./utils/API";

function App() {
  const [currentPets, setCurrentPets] = useState([]);

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = async (event) => {
    // event.preventDefault();
    setCurrentPets([]);

    try {
      const availablePets = await getAvailablePets("available");
      const limitedPets = await availablePets.slice(0, 20);
      console.log(limitedPets);
      setCurrentPets(limitedPets);

      console.log(currentPets);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <AppBar />
      <Table pets={currentPets} />
    </div>
  );
}

export default App;
