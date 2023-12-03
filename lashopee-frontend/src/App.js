import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Fix: import Route instead of Routes
import Views from './views';
import { Provider } from 'react-redux';
import store from './redux/store/Index';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Views />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
