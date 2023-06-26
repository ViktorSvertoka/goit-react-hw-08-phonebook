import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { fetchContacts } from '../../redux/operations';
import { Container, Title, SubTitle, Wrapper } from './App.styled';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

const App = () => {
  // Використання селектора selectContacts для отримання списку контактів з Redux-сховища
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    // Запуск асинхронної Thunk-дії fetchContacts при монтуванні компонента
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      {contacts.length > 0 ? (
        // Якщо є контакти, показується компонент фільтрації
        <Filter />
      ) : (
        // Якщо немає контактів, виводиться повідомлення про відсутність контактів
        <Wrapper>Your phonebook is empty. Add first contact!</Wrapper>
      )}
      {contacts.length > 0 && (
        // Якщо є контакти, показується компонент списку контактів
        <ContactList />
      )}
    </Container>
  );
};

export default App;
