import React from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import Componente1 from './Componente1';

export default function App() {
  return (
    <>
    <header>
      <p><Link to="/componente1"></Link></p>
    </header>

    <main>
      <Routes>
        <Route path="/componente1" element={<Componente1/>}></Route>
      </Routes>
    </main> </>
  );
}
