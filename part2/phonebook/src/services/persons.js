import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAllPersons = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const createContact = (newPersonObject) => {
  const request = axios.post(baseUrl, newPersonObject);
  return request.then((response) => response.data);
};

const deleteContact = (personId) => {
  axios.delete(`${baseUrl}/${personId}`);
  return;
};

const updateContact = (personId, updatedPersonObject) => {
  const request = axios.put(`${baseUrl}/${personId}`, updatedPersonObject);
  return request.then((response) => response.data);
};

const personService = {
  getAllPersons,
  createContact,
  deleteContact,
  updateContact,
};

export default personService;
