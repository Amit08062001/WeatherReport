import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./infoBox.css"
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({info}){
   let  Rain_URL="https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   let Hot_URL ="https://images.unsplash.com/photo-1447601932606-2b63e2e64331?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   let Cold_URL ="https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
   return(
        <div>
            
     <Card className="card" sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={info.humidity > 80 ? Rain_URL : info.temp >15 ? Hot_URL : Cold_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} &nbsp;{info.humidity > 80 ? <ThunderstormIcon/> : info.temp >15 ? <WbSunnyIcon/> : <AcUnitIcon/> }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temprature : {info.temp}&deg;C</p>
           <p> weather: {info.weather}</p>
           <p>{info.minTemp}&deg;C &nbsp;~ &nbsp;{info.maxTemp}&deg;C</p>
           <p>Feels Like :{info.FeelsLike}&deg;C</p>
           <p>Humidity : {info.humidity}%</p>

        </Typography>
      </CardContent>
      
        
    </Card>

        </div>
    )
}