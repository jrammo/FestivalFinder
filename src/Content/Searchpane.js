import React from "react";
import '../Common/App.css';
import axios from 'axios'
import Results from './Results.js'
import Eventpane from './Eventpane.js'


const API_URL_ARTIST = 'https://api.songkick.com/api/3.0/search/artists.json?apikey=U7CU7PpNEtZWceAS'
const API_URL_EVENT = 'https://api.songkick.com/api/3.0/artists'
const API_KEY='U7CU7PpNEtZWceAS'

class Searchpane extends React.Component {
state ={
	query: '',
	artistresults: [],
  eventresults: []
}

getInfo = () => {
	axios.get(`${API_URL_ARTIST}&query='${this.state.query}`)
		.then(({ data}) => {
			this.setState({
				artistresults: data.resultsPage.results.artist
			})
		})
    //console.log(this.state.artistresults)
}

getEventInfo = (artistid) => {
  //console.log(artistid.target.id)
  axios.get(`${API_URL_EVENT}/${artistid.target.id}/calendar.json?apikey=${API_KEY}`)
    .then(({ data}) => {
      this.setState({
        eventresults: data.resultsPage.results.event
      })
    })
    //console.log(this.state.eventresults)
}



handleInputChange = () => {
	this.setState({
		query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } 
    })
  }


  render() {
    let text;

    if (this.state.artistresults && this.state.artistresults.length > 0 ) {
        text=( <>
          <h4> 2. Choose your Artist:</h4> 
          <p> Click on your artist</p>
          </>
      )
    } else {
      text= ( <>
          <h4> 2. Choose your artist:</h4> 
          <p> Search for an artist to see results</p>
          </>
      )
    }

      return (
        <div className='body'>
        <h4> 1. Search for your artist: </h4>
      	<form>
        <label>
          <input 
          type="text"
          placeholder="Search for..."
          ref={input => this.search =input}
          onChange={this.handleInputChange} />
        </label>
        </form>
        {text}
        <Results artists={this.state.artistresults} getEventInfo={this.getEventInfo} />
        <Eventpane results={this.state.eventresults} />

      {console.log(this.state.artistresults)}
      
      </div>
      );
    }
  }

export default Searchpane;