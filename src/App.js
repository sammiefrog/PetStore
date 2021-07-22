import React, { useState, useEffect } from "react";
import AppBar from "./Components/AppBar";
import Table from "./Components/Table";
import {getAvailablePets} from "./utils/API";

function App() {
  const [currentPets, setCurrentPets] = useState([]);

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = async () => {
    try {
      const availablePets = await getAvailablePets("available");
      setCurrentPets(availablePets);
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
