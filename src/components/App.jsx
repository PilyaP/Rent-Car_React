import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import { Loader } from './Loader/Loader';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';

// const Home = lazy(() => import('./pages/HomePage'));
// const Catalog = lazy(() => import('./pages/CatalogPage'));
// const FavoritePage = lazy(() => import('./pages/FavoritePage')); // Раскомментируйте и исправьте путь, если у вас есть страница избранного

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        {/* <Route path="/favorite" element={<FavoritePage />} />  Раскомментируйте, если у вас есть страница избранного */}
      </Routes>
      <Footer />
    </Suspense>
  );
};
