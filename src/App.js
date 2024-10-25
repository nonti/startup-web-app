import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Startup from './pages/Startup';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Startup />} />
      </Routes>
    </div>
  )
}

export default App