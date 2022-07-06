import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Home } from '../../pages/Home';
import { Cast } from '../../pages/Cast';
import { Reviews } from '../../pages/Reviews';
import { CountrySearch } from '../../pages/CountrySearch';
import { Movies } from 'pages/Movies';
import { NotFound } from 'pages/NotFound';

export const App = () => {
  return (
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
  );
};
