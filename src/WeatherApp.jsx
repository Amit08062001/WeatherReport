import { useState } from "react"
import Weather from "./Weather"
import InfoBox from "./infoBox"
export default function WeatherApp(){
    let [weatherInfo , setWeatherInfo] = useState({
        
        city:"Siwan",
        temp :"25",
        weather:"cloudy",
        minTemp :"40",
        maxTemp :"46",
        FeelsLike :"45",
        humidity:"10"
    })
    let updateInfo = (newInfo)=>{
         setWeatherInfo(newInfo)
    }
    return(
        <div>
            
            <Weather updateInfo ={updateInfo} />
            <InfoBox info={weatherInfo}/>

        </div>
    )
}