import axios from 'axios';

export const getSelectedPets = async (requestedStatus) => {
  const response = await axios.get(
    `https://petstore.swagger.io/v2/pet/findByStatus?status=${requestedStatus}`
  );
  console.log(response.data);
  return response.data;
};


