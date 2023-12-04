import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <>
      <Header />
      <div>
        <Suspense fallback="Загрузка...">
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}

export { AppLayout };
