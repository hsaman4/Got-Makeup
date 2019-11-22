import React from 'react';
import './App.css';
import Header from './components/Header'
import NavLinks from './components/NavLinks'
import Footer from './components/Footer'
import Details from './components/Details'

function App() {
  return (

    <div className="App">
      <Header />
      <Details />
        <NavLinks />
        <Footer />
      </div>
      
      );
    }
    
    export default App;
