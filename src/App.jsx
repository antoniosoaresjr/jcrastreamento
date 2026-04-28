import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPageOriginal from './pages/LandingPageOriginal';
import LandingPageAmarela from './pages/LandingPageAmarela';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageOriginal />} />
        <Route path="/lp01" element={<LandingPageOriginal />} />
        <Route path="/lp02" element={<LandingPageAmarela />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
