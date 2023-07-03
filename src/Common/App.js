import React from 'react';
import './App.css';
import Header from '../Content/Header.js'
import Footer from '../Content/Footer.js'
import Searchpane from '../Content/Searchpane.js'


class App extends React.Component {

  render() {
      return (
        <>
      <header>
        <Header />
      </header>
      <div className='body'>
        <Searchpane className='body' />
      </div>
      <footer>  
        <Footer />
      </footer>
      </>
      );
    }
  }

export default App;