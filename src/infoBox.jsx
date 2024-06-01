import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./infoBox.css"
import Typography from '@mui/material/Typography';

export default function InfoBox({info}){
   let  INIT_URL="https://images.unsplash.com/photo-1609881142760-298c2e76725b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   
    return(
        <div>
            
     <Card className="card" sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
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