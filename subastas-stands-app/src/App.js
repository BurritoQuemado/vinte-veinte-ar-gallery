import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { 
  Home,
  GalleryPage
} from './pages'
import { Layout } from './components';

function App () {



  return (
    <Layout>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path='/galeria' element={ <GalleryPage /> } />
      </Routes>
    </Layout>
  );
}

export default App;
