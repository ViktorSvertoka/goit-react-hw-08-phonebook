import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import { Loader } from '../components/Loader/Loader';

// Компонент Tasks відповідає за відображення списку контактів та їх форми
export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts()); // Виконуємо запит для отримання контактів з сервера
  }, [dispatch]);

  return (
    <>
      <title>Your contacts</title>
      <ContactForm /> {/* Компонент форми для додавання контакту */}
      <div>{isLoading && <Loader />}</div>{' '}
      {/* Відображення повідомлення про виконання запиту */}
      <ContactList /> {/* Компонент для відображення списку контактів */}
    </>
  );
}
