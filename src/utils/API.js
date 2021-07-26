import axios from 'axios';

export const getSelectedPets = async (requestedStatus) => {
  const response = await axios.get(
    `https://petstore.swagger.io/v2/pet/findByStatus?status=${requestedStatus}`
  );
  return response.data;
};

// export const findPetToUpdate = async (petId) => {
//   const response = await axios.get(`https://petstore.swagger.io/v2/pet/${petId}`);
//   return response.data;
// }

export const updatePetStatus = async (updatedPet) => {
  const response = await axios({
    method: "PUT",
    url: `https://petstore.swagger.io/v2/pet`,
    data: updatedPet
  });

  return response.data;
};


