import { Wrapper, Title } from './Home.styled';

// Компонент Home відповідає за відображення домашньої сторінки
export default function Home() {
  return (
    <Wrapper>
      <Title>Welcome to Phonebook!</Title>{' '}
      {/* Відображення заголовка на домашній сторінці */}
    </Wrapper>
  );
}
