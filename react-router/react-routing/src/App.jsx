import { Layout } from './components/Layout';

import { Routes, Route } from 'react-router-dom';

import { AboutPage, PostsPage, HomePage, NotFoundPage, PostPage } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='posts' element={<PostsPage />} />
          <Route path='posts/:id' element={<PostPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
