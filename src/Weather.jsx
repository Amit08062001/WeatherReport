import './Weather.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Weather({updateInfo}){
    
    let [city , setCity] = useState("")
    let [error ,setError] = useState(false)
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "768c5ef69582df8d714238461d2c0948";
 
    let weatherInfo = async () =>{
     try{   
      let result= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
      let resResult = await result.json()
      console.log(resResult)
      if (resResult.cod !== 200) {
          throw new Error(resResult.message);
      }
      let weatherResult = {
           city : city,
           temp : resResult.main.temp,
           weather: resResult.weather[0].description,
           minTemp : resResult.main.temp_min,
           maxTemp : resResult.main.temp_max,
           FeelsLike : resResult.main.feels_like,
           humidity : resResult.main.humidity
      }
      console.log(weatherResult);
      return weatherResult
    }
    catch (error){
        throw error
    } 
}

     let handleInput= (event) => {
         setCity(event.target.value)
         setError(false) 
     }

    let handleSubmit = async (event) =>{
        try{
            event.preventDefault()
            console.log(city)
            setError(false) 
            let newInfo = await weatherInfo();
            setCity("")
            updateInfo(newInfo)
        }
        catch(error){
            setError(true)
        } 
    } 

    return(
        <form onSubmit={handleSubmit}>
            <h2>Weather Report</h2>
            <div>
                <TextField 
                    id='city'  
                    label="Enter City Name"  
                    required 
                    value={city} 
                    onChange={handleInput}
                /> 
                <br></br><br></br>
                <Button 
                    sx={{ backgroundColor: "blue" }} 
                    variant="contained" 
                    type='submit'
                >
                    Search
                </Button>
                {error && <p style={{color: "red"}}>No Such Place Exists</p>}
            </div>
        </form>
    )
}
