import { useAuth } from 'hooks/useAuth';
import { Link } from './Navigation.styled';

// Компонент Navigation відповідає за навігаційне меню
export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link> {/* Посилання на головну сторінку */}
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}{' '}
      {/* Посилання на сторінку контактів, доступне тільки для авторизованих користувачів */}
    </nav>
  );
};
