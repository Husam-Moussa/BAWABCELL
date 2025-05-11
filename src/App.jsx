// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { CartProvider } from './components/CartContext';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <CartProvider>
    

// ...

<Routes>
  <Route path="/" element={<Navigate to="/home" replace />} /> {/* ⬅️ Add this line */}
  <Route path="/home" element={<Home />} />
  <Route path="/shop" element={<Shop />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<div className="text-center p-10 text-2xl text-gray-600">404 - Page Not Found</div>} />
</Routes>

      </CartProvider>
    </Router>
  );
};

export default App;
