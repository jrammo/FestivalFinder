import React from "react";
import '../Common/App.css';
import '../Common/powered-by-songkick-pink.png'

class Footer extends React.Component {

  render() {
      return (
      	<div>
      	<div className='App-footer-container'>
      		<img className='Logo' src={require(`../Common/powered-by-songkick-pink.png`)} alt="powered by Songkick" />
        	<footer className='App-footer'>
        	by Jessica Rammo </footer>
        </div>
        </div>
      );
    }
  }

export default Footer;