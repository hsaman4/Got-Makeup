import React from 'react';
import './App.css';
import Header from './components/Header'
import NavLinks from './components/NavLinks'
import Footer from './components/Footer'
import Details from './components/Details'
import Tags from './components/screens/Tags'

function App() {
  return (

    <div className="App">
      <Header />
      <Details />
        <NavLinks />
        <Tags />
        <Footer />
      </div>
      
      );
    }
    
    export default App;
