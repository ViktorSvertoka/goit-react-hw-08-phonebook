import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Label, Input, Button } from './LoginForm.styled';

// Компонент LoginForm відповідає за форму авторизації користувача
export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    // Викликаємо дію logIn з параметрами email та password, які отримуємо зі значень полів форми
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset(); // Очищуємо значення полів форми після відправки
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  );
};
