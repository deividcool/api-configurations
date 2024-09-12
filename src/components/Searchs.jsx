import React, { useState, useEffect } from 'react';
import useStore from './useStore';
import './styles/Search.css';

const SearchCountries = () => {
    const { addCountry } = useStore();
    const [searchTerm, setSearchTerm] = useState('');
    const [countries, setCountries] = useState([]);
  
    useEffect(() => {
      const fetchCountries = async () => {
        try {
          const response = await fetch('https://restcountries.com/v3.1/all');
          const data = await response.json();
          setCountries(data);
        } catch (error) {
          console.error('Error fetching countries:', error);
        }
      };
  
      fetchCountries();
    }, []);
  
    const filteredCountries = countries.filter(country =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div className="search-container">
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search Countries"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </div>
        </div>
        <div className={`country-list ${searchTerm ? 'visible' : ''}`}>
          {filteredCountries.map((country) => (
            <li
              key={country.cca3}
              className="country-item"
              onClick={() => addCountry(country)}
            >
              <img
                src={country.flags.svg}
                alt={`${country.name.common} flag`}
                className="country-flag"
              />
              <span className='text-white'>{country.name.common}</span>
            </li>
          ))}
        </div>
      </div>
    );
  };

export default SearchCountries;