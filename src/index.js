import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProductsListPage from './pages/ProductsListPage';
import BookmarkPage from './pages/BookmarkPage';
import NotFound from './pages/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/products/list' element={<ProductsListPage />} />
        <Route path='/bookmark' element={<BookmarkPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer
        label='개인정보 처리방침 | 이용 약관'
        copyright='All rights reserved @ Codestates'
      />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
