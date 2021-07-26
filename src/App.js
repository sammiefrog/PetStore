import React, { useState, useEffect } from "react";
//material ui components
import Container from "@material-ui/core/Container";
//custom components
import Header from "./Components/Header";
import Table from "./Components/Table";
import PetFilterButtons from './Components/PetFilterButtons';
import Footer from './Components/Footer';
//api
import {getSelectedPets} from "./utils/API";

function App() {
  //using state to manage current pets, limited pets(20 or less of current), and selected status
  const [currentPets, setCurrentPets] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [limitedPets, setLimitedPets] = useState([]);

  useEffect(() => {
    //limiting number of pets displayed
    if (currentPets !== []) {
        const slicedPets = currentPets.slice(0, 20);
        setLimitedPets(slicedPets);
    }
  }, [currentPets]);

  const handleSearch = async (status) => {
    try {
      //setting petStatus to the status of the button clicked
      setSelectedStatus(status);
      //status is being sent by the click event on each button
      const selectedPets = await getSelectedPets(status);
      setCurrentPets(selectedPets);
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
