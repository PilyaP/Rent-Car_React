import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from './Loader/Loader';
import Header from './Header/Header';
import Footer from './Footer/Footer';
// import HomePage from './pages/HomePage';

const Home = lazy(() => import('components/pages/HomePage'));
// const Favorite= lazy(() => import('components/pages/FavoritePage'));
// const Catalog = lazy(() => import('components/pages/CatalogPage'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritePage />} /> */}
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
};
