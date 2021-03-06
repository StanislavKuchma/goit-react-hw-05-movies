import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Header from '../Header/Header';
// import Home from '../../pages/Home';
// import Cast from '../../pages/Cast';
// import Reviews from '../../pages/Reviews';
// import Movies from '../../pages/Movies';
// import NotFound from '../../pages/NotFound';
// import CountrySearch from 'pages/CountrySearch';

const Header = lazy(() => import('../Header/Header'));
const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const Cast = lazy(() => import('../../pages/Cast'));
const MoviesSearch = lazy(() => import('../../pages/MoviesSearch'));
const Reviews = lazy(() => import('../../pages/Reviews'));
const NotFound = lazy(() => import('../../pages/NotFound'));

const App = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index path="/" element={<Home />} />
          <Route path="movies" element={<MoviesSearch />} />
          <Route path="movies/:id" element={<Movies />}>
            <Route path="cast" element={<Cast />} replace={true} />
            <Route path="reviews" element={<Reviews />} replace={true} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
export default App;
