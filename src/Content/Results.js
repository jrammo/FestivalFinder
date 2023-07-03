import React from 'react' 

const Results = (props) => {

  if (!props.artists) {
    return null;
  }

  const options = props.artists.map(r => (
    <li key={r.id}>
      <button type='button' id={r.id} onClick={e => props.getEventInfo(e)}>{r.displayName}</button>
    </li>
  ))
  return <ul>{options}</ul>
}

export default Results