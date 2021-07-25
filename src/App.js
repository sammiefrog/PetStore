import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Table from "./Components/Table";
import PetFilterButtons from './Components/PetFilterButtons';
import Container from '@material-ui/core/Container';
import Footer from './Components/Footer';
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
    try {
      //setting petStatus to the status of the button clicked
      setSelectedStatus(status);

      const selectedPets = await getSelectedPets(status);
      setCurrentPets(selectedPets);

      console.log(currentPets);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <Header />
      <Container>
        <PetFilterButtons handleSearch={handleSearch} />
        <Table pets={limitedPets} petStatus={selectedStatus} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
