import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import FilterByName from 'components/FilterByName/FilterByName';
import ContactList from 'components/ContactList/ContactList';
import Loader from 'components/Loader/Loader';
import { PhoneCard, Title, TitleMain } from 'AppStyled';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setFilter } from 'redux/phonebookReducers';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from 'thunk/thunk';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const handleOnInput = eve => {
    dispatch(setFilter(eve.target.value));
  };

  const handleAddContact = ({ name, number }) => {
    const contactInList = contacts.some(contact => contact.number === number);

    if (name && number) {
      if (!contactInList) {
        dispatch(addContactThunk({ id: nanoid(), name, number }));
        toast.success(`${name} was added to contacts`);
      } else {
        toast.error(`${name} is already exist in contacts`);
      }
    }
  };

  const handleDelContact = id => {
    dispatch(deleteContactThunk(id));
  };

  const filterOfContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filterData = filterOfContacts();
  return (
    <PhoneCard>
      <TitleMain>Phone book</TitleMain>
      <ContactForm addContact={handleAddContact} />
      {isLoading && <Loader />}
      {error && <div>Error loading contacts: {error}</div>}{' '}
      {contacts.length ? (
        <>
          <Title>Contacts</Title>
          <FilterByName onFilterChange={handleOnInput} filterValue={filter} />
          <ContactList
            contacts={filterData}
            filterValue={filter}
            deleteContact={handleDelContact}
          />
        </>
      ) : (
        'There are no contacts'
      )}
    </PhoneCard>
  );
};
