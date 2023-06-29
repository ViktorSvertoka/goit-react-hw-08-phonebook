import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import { Wrapper } from './Layout.styled';

// Компонент Layout відповідає за загальну структуру сторінки
export const Layout = () => {
  return (
    <Wrapper>
      <AppBar />{' '}
      {/*Виводимо компонент AppBar, який містить навігаційну панель */}
      <Suspense fallback={null}>
        <Outlet />
        {/* Виводимо дочірній компонент Outlet, який буде містити відповідний компонент в залежності від поточного шляху */}
      </Suspense>
    </Wrapper>
  );
};
