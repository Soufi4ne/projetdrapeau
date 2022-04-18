import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from './Card';


const Countries = () => {

    const [data, setData] = useState([])
    const [coucou, DireCoucou] = useState("Coucou Efrei PARIS !")

    useEffect(() => {
      axios.get("https://restcountries.com/v3.1/all").then((res) => setData(res.data))
    }, [])
    


    return (
        <div className='countries'>
            <h1>List of All Countries Flags</h1>
            <ul className='container-radio'>
                {
                    data.map((country, index) => (
                    // <li key={index}>{country.translations.cym.official}</li> 
                    <Card key={index} country={country}/>
                    ))
                }
            </ul>
        </div>
    );
};

export default Countries;