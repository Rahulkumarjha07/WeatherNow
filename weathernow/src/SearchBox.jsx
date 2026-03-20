import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import "./SearchBox.css";
export default function SearchBox() {
    return (
        <div className='SearchBox'>
            <h1>Search for the Weather Location</h1>
            <TextField 
                id="outlined-basic" 
                label="City Name" 
                variant="outlined" 
                required
            />
            <br></br>
            <br></br>
             <Button variant="contained" >
        search
      </Button>
        </div>
    );
}