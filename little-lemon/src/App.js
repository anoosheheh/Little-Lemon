import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import React from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';

const App=()=> {
  return (
    <>
    <Nav />
    <Main />
    <Menu />
    <Footer />
    </>
  );
}

export default App;
