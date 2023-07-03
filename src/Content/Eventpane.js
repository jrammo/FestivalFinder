import React from "react";
import '../Common/App.css';


class Eventpane extends React.Component {

  render() {
  
  if (!this.props.results) {
    return (
      <>
      <h4>
      3. Your artist is playing at...
      </h4>
      <p> No Festivals found </p>
      </>
      );
  }

  function filterByType(item) {
    if (item.type === 'Festival') {
      return true;
    }  else {
      return false;
    }
  }

  const festivalresults = this.props.results.filter(filterByType)

  const options = festivalresults.map(r => (
    <li key={r.id}>
      <a href={r.uri}>{r.displayName}</a><br />
      <p> {r.location.city} - {r.start.date} </p>
    </li>
  ))


  return(
    <div>
    <h4>
      3. Your artist is playing at...
    </h4>
    <ul>{options}</ul>
    </div>
    )
}
}

export default Eventpane;