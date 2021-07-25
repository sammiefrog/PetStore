import axios from 'axios';

export const getSelectedPets = async (requestedStatus) => {
  const response = await axios.get(
    `https://petstore.swagger.io/v2/pet/findByStatus?status=${requestedStatus}`
  );
  console.log(response.data);
  return response.data;
};

export const findPetToUpdate = async (petId) => {
  const response = await axios.get(`https://petstore.swagger.io/v2/pet/${petId}`);
  return response.data;
}

export const updatePetStatus = async (updatedPet) => {
  const response = await axios.put(`https://petstore.swagger.io/v2/pet`, updatedPet);
  return response.data;
};


