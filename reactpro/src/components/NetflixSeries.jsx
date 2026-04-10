import seriesData from "../api/seriesData.json";
import SeriesCard from "./SeriesCard";
const NetflixSeries = () => {
    //const Name = "queen of tears";
    //const Rating = "5.7";
    //const Summary =
    // "bryh njjs mncsjc lakm  yhbnsc mkskcs nacbs alamc nccjks cmalacacsc alc alscanx kmcksca";

    //let age = "34";
    //let canWatch = "not availablre";
    //if(age > 18) canWatch = "watch now";

    // const canWatch = () => {
    // if (age > 18) return "watch now";
    // return "not available";
    //}

    //const returnGenra = () => {
    // const genra = "RomCom";
    //return genra;
    // }
    //if(age < 18)
    // {
    // return (
    // <div>
    //  <div>
    // <img src="download.jpeg" alt="download.jpeg" width="40%"
    //height="40%" />
    //</div>
    //<h2>Name:{Name}</h2>
    // <h3>Rating:{Rating}</h3>
    // <p>Summary:{Summary}</p>
    //  <p>Genra:{returnGenra()}</p>
    // <button>Not Available</button>
    // </div>
    // );
    // }
    return (
        <ul className="grid grid-three--cols">
            {seriesData.map((curElem) => {
                return (
                    <SeriesCard key={curElem.id} data={curElem} />
                )
            })}

        </ul>
    );
}


export default NetflixSeries;
