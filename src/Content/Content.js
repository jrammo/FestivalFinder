import React from "react";
import '../Common/App.css';
import Searchpane from './Searchpane.js'

class Content extends React.Component {
  constructor(props){
    super(props);
  this.state = {
    error: null,
    isLoaded: false,
    weather: [],
    temp: "",
  };
}
  /* 
    1. Add the method componentDidMount()
    2. Call fetch("https://dev-react-explained-api.pantheonsite.io/wp-json/wp/v2/posts")
    3. Then call .json() on the response
    4. Take that and set it as the value of posts in state
    5  Add a catch to log out any errors
  */
  componentDidMount() {
    fetch("https://mm214.com/demo.php")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            weather: result.weather,
            temp: result.main.temp
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

  }


  render() {
    const { error, isLoaded, weather, temp } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
        <div>
          {weather.map(item => (
            <p key='1'>
              {item.description} and {Math.round((temp - 273.15) * 9/5 + 32)} degrees Fahrenheit
            </p>
          ))}
        </div>
          <Searchpane />
        </>
      );
    }
  }
}

export default Content;