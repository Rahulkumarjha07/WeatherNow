import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox() {
    let [city, setCity] = useState("");

    let getweatherinfo = async () => {
        try {
            let api ="4b482c7b7269524ab6a554ac84868d45";

            let response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`
            );

            let jsonresponse = await response.json();

            if (jsonresponse.cod !== 200) {
                alert("City not found ❌");
                return;
            }

            console.log(jsonresponse);
            console.log("Temp:", jsonresponse.main.temp);
            console.log("Humidity:", jsonresponse.main.humidity);

        } catch (err) {
            console.log("Error:", err);
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handlesubmit = (event) => {
        event.preventDefault();
        getweatherinfo();
        setCity("");
    };

    return (
        <div className='SearchBox'>
            <h1>Search for the Weather Location</h1>

            <form onSubmit={handlesubmit}>
                <TextField 
                    label="City Name" 
                    variant="outlined" 
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /><br />

                <Button variant="contained" type="submit">
                    Search
                </Button>
            </form>
        </div>
    );
}