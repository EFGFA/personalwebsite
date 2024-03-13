import React from 'react';
import'./App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path ='/' exact />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
