import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Market from './pages/Market';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/market" element={<Market />} />
      </Routes>
    </Router>
  );
}

export default App;
