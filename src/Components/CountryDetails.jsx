import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


export default function CountryDetails() {
  const [details, setDetails] = useState(null);
  const { alpha3Code } = useParams();

  useEffect(() => {
    alpha3Code &&
      axios
        .get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
        .then((response) => {
          setDetails(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [alpha3Code]);
  return (
    <>
      {details && (
        <div className="Country-details">
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${details.alpha2Code.toLowerCase()}.png`}
            alt="flag"
          />
          <h1>{details.name.common}</h1>
          <div className="Country-specs">
            <p>Capital: {details.capital}</p>
            <hr />
            <br />
            <p>Area: {details.area}</p>
            <hr />
            <br />

            <p>
              Borders:
              {details.borders.map((border) => {
                return <li><Link to={`/${border}`}>{border}</Link></li>;
              })}
                
          
            </p>
            <hr />
               <br />
          </div>
        </div>
      )}
    </>
  );
}