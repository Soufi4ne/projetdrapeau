import React from 'react';

const Card = ({country}) => {

    console.log(country)
    return (
        <li className='card'>
            <img src={country.flags.svg} alt={country.translations.cym.official + " flag"}/>
            <div className='infos'>
                <h2>{country.translations.cym.official}</h2>
                <h4>🏙️ : {country.capital}</h4>
                <h5>🌍 : {[country.region]}</h5>

            </div>
        </li>
    );
};

export default Card;