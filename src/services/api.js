import axios from 'axios';

const API = axios.create({
  baseURL: 'https://652d1fb5f9afa8ef4b26d18e.mockapi.io/contacts',
});

export async function fetchContacts() {
  const response = await API.get();
  return response.data;
}

export async function addContact(newContact) {
  const response = await API.post('', newContact);
  return response.data;
}

export async function deleteContact(contactId) {
  const response = await API.delete(`${contactId}`);
}
