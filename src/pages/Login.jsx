import { LoginForm } from 'components/LoginForm/LoginForm';

// Компонент Login відповідає за відображення сторінки входу в систему
export default function Login() {
  return (
    <>
      <title>Login</title>
      <LoginForm /> {/* Відображення форми для входу в систему */}
    </>
  );
}
