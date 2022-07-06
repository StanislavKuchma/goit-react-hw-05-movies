import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Home } from '../../pages/Home';
import { Cast } from '../../pages/Cast';
import { Reviews } from '../../pages/Reviews';
import { CountrySearch } from '../../pages/CountrySearch';
import { Movies } from 'pages/Movies';
import { NotFound } from 'pages/NotFound';

// const Movies = lazy(() => import('../../pages/Movies'));
// const Cast = lazy(() => import('../../pages/Cast'));
// const CountrySearch = lazy(() => import('../../pages/CountrySearch'));
// const Reviews = lazy(() => import('../../pages/Reviews'));

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index path="/" element={<Home />} />
          <Route path="/movies" element={<CountrySearch />} />
          <Route path="movies/:id" element={<Movies />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
