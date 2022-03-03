import { NavLink } from 'react-router-dom';
import React from 'react'


export default function CountriesList(props) {
  return ( 
       
  <div className="Countries-list">
    {props.countries.map((country, index) => {
      return (
        <div key={index} className="Countries-card">
         
          <NavLink to={`/${country.alpha3Code}`}>
          <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt="flag"
              />
            <h3>{country.name.common}</h3>
            <br />
          </NavLink>
        </div>
      );
    })}
  </div>

);
}