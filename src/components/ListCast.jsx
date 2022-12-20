import { useState, useEffect } from "react";

export default () => {
  const [cast, setCast] = useState([]);
//call the json file to use the objects
  async function fetchCast() {
    const response = await fetch('cast.json');
    //set the cast when response returned
    setCast(await response.json());
  }

  //useEffect to fetch the data calling from external file
  useEffect(() => {
    fetchCast();
  });

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))',
      gap: '1rem',
      marginBottom: '1rem'
    }}>
      {
        //use the data returned in the response
      cast.map(member => (
        <a key={member.id} data-tooltip={member.name}>
        <img src={`images/${member.slug}_tn.svg`} alt={member.name} />
        </a>
      ))
      }
    </div>
  )
}