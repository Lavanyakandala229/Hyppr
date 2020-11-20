import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';

const App = () => {

return (
  <BrowserRouter>
      <div className="App">
        
    <Header />
    <Banner /> 
    
      </div>
    </BrowserRouter>
  );
}

export default App;
