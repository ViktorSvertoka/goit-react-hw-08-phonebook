import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Wrapper, Text, Button } from './UserMenu.styled';

// Компонент UserMenu відповідає за меню користувача, якщо користувач авторизований
export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Text>Welcome to Phonebook {user.name} </Text>{' '}
      {/* Відображення привітання з ім'ям користувача */}
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>{' '}
      {/* Кнопка для виходу з облікового запису користувача */}
    </Wrapper>
  );
};
