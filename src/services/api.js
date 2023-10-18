import axios from 'axios';

const API = axios.create({
  baseURL: 'https://652e5de70b8d8ddac0b13f42.mockapi.io',
});

export async function fetchContacts() {
  const response = await API.get('/contacts');
  console.log(response.data);
  return response.data;
}

export async function addContact(newContact) {
  const response = await API.post('/contacts/', newContact);
  return response.data;
}

export async function deleteContact(id) {
  const response = await API.delete(`/contacts/${id}`);
  return response.data;
}
