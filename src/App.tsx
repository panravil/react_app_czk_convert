import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import DataProvider from './context/DataContext';
import Layout from './layout/Layout';
import Home from './pages/Home';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
            </Routes>
          </Layout>
        </Router>
      </DataProvider>
    </QueryClientProvider>
  );
}

export default App;
