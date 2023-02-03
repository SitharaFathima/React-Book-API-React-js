import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import reportWebVitals from './reportWebVitals';

// packages
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';  

// components
import { AppProvider } from './context.';
import Home from './components/screens/pages/Home';
import About from './components/screens/pages/About';
import BookList from './components/screens/pages/BookList';
import BookDetails from './components/screens/pages/BookDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <Router>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='book' element={<BookList />} />
          <Route path='/book/:id' element={<BookDetails />} />
      </Routes>
    </Router>
    </AppProvider> 
);

