import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import { Wrapper } from './Layout.styled';
import { Loader } from '../Loader/Loader';

// Компонент Layout відповідає за загальну структуру сторінки
export const Layout = () => {
  return (
    <Wrapper>
      <AppBar />{' '}
      {/*Виводимо компонент AppBar, який містить навігаційну панель */}
      <Suspense fallback={<Loader />}>
        <Outlet />
        {/* Виводимо дочірній компонент Outlet, який буде містити відповідний компонент в залежності від поточного шляху */}
      </Suspense>
    </Wrapper>
  );
};
