import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/selectors';

// Хук useAuth надає доступ до даних авторизації користувача
export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn, // Показує, чи користувач авторизований
    isRefreshing, // Показує, чи відбувається оновлення інформації про користувача
    user, // Об'єкт, що містить дані авторизованого користувача
  };
};
