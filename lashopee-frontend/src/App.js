import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Views from './views';





function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Views />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};


export default App;
