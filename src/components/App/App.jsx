import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import PhoneIcons from '../PhoneIcons/PhoneIcons';
import { Wrapper } from './App.styled';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch(); // Отримуємо функцію dispatch для відправки дій до Redux store
  const { isRefreshing } = useAuth(); // Отримуємо стан аутентифікації користувача

  useEffect(() => {
    dispatch(refreshUser()); // Викликаємо функцію оновлення користувача при монтажі компонента або зміні dispatch
  }, [dispatch]);

  // Перевіряємо, чи триває процес оновлення користувача
  // Якщо так, відображаємо текст "Оновлення користувача..."
  // Якщо ні, відображаємо структуру маршрутизації додатка
  return isRefreshing ? (
    <p>Оновлення користувача...</p>
  ) : (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*Головна сторінка */}
          <Route index element={<Home />} />
          {/* Сторінка реєстрації користувача */}
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/login" component={<Register />} />
            }
          />
          {/* Сторінка входу користувача */}
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          {/* Сторінка контактів (доступна тільки для авторизованих користувачів) */}
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
        {/* Маршрут за замовчуванням (якщо ні один інший маршрут не співпадає) */}
        <Route path="*" element={<Home />} />
      </Routes>
      <PhoneIcons />
    </Wrapper>
  );
};
