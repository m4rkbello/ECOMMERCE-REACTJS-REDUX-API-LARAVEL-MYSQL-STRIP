import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Fix: import Route instead of Routes
import Views from './views';
import Landing from './views/Landing';
import Cart from './views/Cart';
import Category from './views/Category';
// import NotFound from './views/Error';
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
            <Route exact path="/category" element={<Category />} />
        
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
