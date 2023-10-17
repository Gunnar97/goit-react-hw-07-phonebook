export const selectContacts = state => state.phonebook.contacts.items;
export const selectIsLoading = state => state.phonebook.contacts.isLoading;
export const selectError = state => state.phonebook.contacts.error;
export const selectFilter = state => state.phonebook.filter;
