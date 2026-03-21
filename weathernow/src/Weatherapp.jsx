import SearchBox from './SearchBox';
import InfoBox from "./InfoBox"

export default function Weatherapp(){
    return(
        <div>

            <h2 style={{textAlign:"center"}}>This is the weather components </h2>

            <SearchBox/>
            <InfoBox/>
        </div>
    );
}