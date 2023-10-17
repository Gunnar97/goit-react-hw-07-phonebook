import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducers } from './phonebookReducers';
import { contactFormReducers } from './contactFormReducers';

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducers,
    contactForm: contactFormReducers,
  },
});
