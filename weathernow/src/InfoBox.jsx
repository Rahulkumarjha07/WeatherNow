import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox() {

    let information = {
        city: "delhi",
        feelsLike: 24.2,
        temp: 25.5,
        tempmax: 35,
        tempmin: 20,
        humidity: 27,
        weather: "Haze",
    };

    return (
        <div className="InfoBox">
            <h1>Weather Info</h1>
            <h2>Condition: {information.weather}</h2>

            <Card  className="weatherCard">
                <CardMedia
                    sx={{ height: 140 }}
                    image="https://images.unsplash.com/photo-1501973801540-537f08ccae7b"
                    title="weather"
                />

                <CardContent>
                    <Typography variant="h6">
                        {information.city}
                    </Typography>

                    <Typography variant="h5">
                        Temperature: {information.temp}°C
                    </Typography>

                    <Typography variant="body2">
                        Feels Like: {information.feelsLike}°C
                        <br /><br />
                        Min Temp: {information.tempmin}°C
                        <br /><br />
                        Max Temp: {information.tempmax}°C
                        <br /><br />
                        Humidity: {information.humidity}%
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}