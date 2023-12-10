import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Fix: import Route instead of Routes
import Views from './views';
import Cart from './views/Cart';
import CategoryDetail from './views/Category';

import NotFound from './views/NotFound';

// import ProductDetail from './views/Product';


import { Provider } from 'react-redux';
import store from './redux/store/Index';





function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
        
          <Routes>
            <Route exact path="/" element={<Views />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/category/:id" element={<CategoryDetail />} />
    
            <Route exact path="/error" element={<NotFound />} />
   
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
