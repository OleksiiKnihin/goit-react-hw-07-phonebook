import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContacrList/ContactList';
import { Filter } from './Filter/Filter';
import { getError, getIsLoading } from 'redux/selectors';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <h1>Your phonebook</h1>
      <ContactForm />

      <h2>Contacts from your phonebook</h2>
      <div className={css.list_contact}>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </div>
    </div>
  );
};
