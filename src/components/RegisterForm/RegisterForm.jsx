import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Label, Input, Button } from './RegisterForm.styles';

// Компонент RegisterForm відповідає за форму реєстрації нового користувача
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    if (
      form.elements.name.value.trim() === '' ||
      form.elements.email.value.trim() === '' ||
      form.elements.password.value.trim() === ''
    ) {
      return alert('Будь ласка, заповніть усі поля');
    }

    // Викликаємо дію register з параметрами name, email та password, які отримуємо зі значень полів форми
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset(); // Очищуємо значення полів форми після відправки
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input type="text" name="name" placeholder="Введіть ім'я" />
      </Label>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          placeholder="Введіть адресу електронної пошти"
        />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" placeholder="Введіть пароль" />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
