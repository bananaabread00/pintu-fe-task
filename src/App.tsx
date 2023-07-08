import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Market from './pages/Market';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/market" element={<Market />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
