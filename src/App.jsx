import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import About from './components/About';
import Progress from './components/progress';
import Portfil from './components/Portfil';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <About/>
        <Progress/>
        <Portfil/>
      <Footer/>
      </>
    );
  }
}

export default App;
