import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import countries from './countries.json'
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
import axios from 'axios';
import { Routes,Route } from 'react-router-dom';
import CountryDetails from './Components/CountryDetails';


function App() {
  const [myCountries, setMyCountries] = useState([]);
  console.log(myCountries)
  
useEffect(() => {
    axios
      .get(' https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setMyCountries(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
  <div className="App">
    <div className="App-main">
   
      <Navbar countries={myCountries}/>
    
      </div>
      <Routes>
      <Route path='/' element={<CountriesList countries={myCountries} />}/>
      <Route path=":alpha3Code" element={<CountryDetails countries={myCountries} />}/>
      </Routes>
 
   
      
    </div>
  );
 
}

export default App;
