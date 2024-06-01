import './Weather.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function Weather({updateInfo}){
    let [city , setCity] = useState("")
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "768c5ef69582df8d714238461d2c0948";
 
    let weatherInfo = async () =>{
      let result= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
      let resResult = await result.json()
      console.log(resResult)
      let weatherResult = {
           city :city,
           temp : resResult.main.temp,
           weather: resResult.weather[0].description,
           minTemp : resResult.main.temp_min,
           maxTemp : resResult.main.temp_max,
           FeelsLike :resResult.main.feels_like,
           humidity :resResult.main.humidity
      }
      console.log(weatherResult);
      return weatherResult
    }


     let handleInput= (event) => {
         setCity(event.target.value)
     }

    let handleSubmit = async (event) =>{
        event.preventDefault()
        console.log(city)
        setCity("")
        let newInfo = await weatherInfo();
        updateInfo(newInfo)
        
    } 
    return(
        <form onSubmit={handleSubmit}>
            <h2>Weather Report</h2>
            <div>
            <TextField id='city'  label="Enter City Name"  required value={city} onChange={handleInput}/> 
            <br></br> <br></br>
            <Button variant="outlined " type='submit' color='succes'>Search</Button>
            </div>
            

        </form>
    )
}