import axios from 'axios';

const API = axios.create({
  baseURL: 'https://652d1fb5f9afa8ef4b26d18e.mockapi.io/contacts/',
});

export async function fetchContacts() {
  const response = await API.get();
  console.log(response.data);
  return response.data;
}

export async function addContact(newContact) {
  const response = await API.post('', newContact);
  return response.data;
}

export async function deleteContact(id) {
  const response = await API.delete(`${id}`);
  return response.data;
}
