import { useState } from 'react';

import './App.css';
import { Home } from './pages/Home';

function App() {
  return (
    <main className='font-["Oswald",_sans-serif;] font-normal bg-black text-white flex w-screen h-screen'>
      <Home />
    </main>
  );
}

export default App;
