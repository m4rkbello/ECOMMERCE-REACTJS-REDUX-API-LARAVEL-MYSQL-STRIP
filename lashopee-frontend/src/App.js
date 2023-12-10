import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Views from './views';
import Cart from './views/Cart';
import CategoryDetail from './views/Category';
import ProductDetail from './views/Product';
import NotFound from './views/NotFound';
import { Provider } from 'react-redux';
import store from './redux/store/Index';
import Header from './components/shared/Header';
import Landing from './views/Landing';



function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
      
          <Routes>
            {/* Change the path from "/" to "/*" */}
            <Route path="*" element={<Views />} />
      
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
