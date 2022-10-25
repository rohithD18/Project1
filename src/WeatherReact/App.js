import React, { useState } from 'react';
import './app.css';


const WeatherApp = () => {
    const [city, setCity] = useState('');
    const [result, setResult] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
            .then(response => response.json())
              .then(data =>{
                const kelvin = data.main.temp;
                const celsius = kelvin -273.15;
                setResult('Temperature at ' + city + "\n"+ Math.round(celsius)+ "°C");
            }).catch(error=>console.log(error))
            setCity("");

    }
    const handleChange=(e)=>{
        setCity(e.target.value);
    }
  return (
    <div className='body'>
       <div>
       <form onSubmit={handleSubmit}>
       <h1>Check Weather</h1>
       <input type={'text'} 
       onChange={handleChange}
       value={city}/> <br /> <br />
       <button>Get Weather</button>
       
       </form>
       </div>
      <div>
      <h2>{result} </h2>
      </div>

    </div>
  )
}

export default WeatherApp;