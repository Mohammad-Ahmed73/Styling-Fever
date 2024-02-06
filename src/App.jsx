import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/css/global-style.css';
import './assets/css/style.css';
import Header from './components/Navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import Product from './pages/Product';
import ContactForm from './pages/ContactForm';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/contact-us' element={<ContactForm />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
