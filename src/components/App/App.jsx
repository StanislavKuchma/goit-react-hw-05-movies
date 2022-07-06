import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Home } from '../../pages/Home';
import { Cast } from '../../pages/Cast';
import { Reviews } from '../../pages/Reviews';
import { CountrySearch } from '../../pages/CountrySearch';
import { Movies } from 'pages/Movies';

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
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

// 3e6b5a16db2403137fa9f14ae47f28f4
//
// <>
//   <Navigation />
//   <Suspense fallback={<Loader />}>
//     <Routes>
//       <Route exact path="/" element={<Home />} />
//       <Route path="/movies" element={<Movies />} />
//       <Route path="movies/:itemId" element={<MoviePage />}>
//         <Route path="cast" element={<Cast />} replace={true} />
//         <Route path="reviews" element={<Reviews />} replace={true} />
//       </Route>
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   </Suspense>
// </>;
