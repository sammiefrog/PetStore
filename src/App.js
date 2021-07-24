import React, { useState, useEffect } from "react";
import AppBar from "./Components/AppBar";
import Table from "./Components/Table";
import PetFilterButtons from './Components/PetFilterButtons';
import Container from '@material-ui/core/Container';
import {getSelectedPets} from "./utils/API";

function App() {
  const [currentPets, setCurrentPets] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [limitedPets, setLimitedPets] = useState([]);

  useEffect(() => {
    //limiting number of pets displayed
    if (currentPets !== []) {
        const slicedPets = currentPets.slice(0, 20);
        console.log(slicedPets);
        setLimitedPets(slicedPets);
    }
  }, [currentPets]);

  const handleSearch = async (status) => {
    //reset current pets before searching
    // setCurrentPets([]);
          // const status = event.target.dataset.status;
          console.log(status);
          setSelectedStatus(status);

    try {
      const selectedPets = await getSelectedPets(status);
      setCurrentPets(selectedPets);

      console.log(currentPets);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <AppBar />
      <Container>
        <PetFilterButtons handleSearch={handleSearch} />
        <Table pets={limitedPets} petStatus={selectedStatus} />
      </Container>
    </div>
  );
}

export default App;
