import {Button, Snackbar} from "@mui/joy";
import Movie from "../model/Movie";
import {getYearDict, setYearDict} from "./MovieList";
import {chartData, formatData} from "./GenrePieChart";
import axios from "axios";


export function addToList(props){
        let newMovies = [];
        props.movies.forEach((movie) => {newMovies.push(new Movie(movie.title, movie.year, movie.genre, movie.franchise))})

                if(props.title === ""){
                    props.setMessage("Error adding element"); console.log("Error adding element")
                    return;
                }

                let movie = new Movie(props.title, props.year, props.genre, props.name)


                if(newMovies.find((m) => Movie.equal(m, movie)) === undefined)
                    newMovies.push(movie)

                let franchise_id=-1;

                axios.get("http://localhost:8080/franchises/" + movie.franchise)
                    .then(response => {
                        franchise_id = response.data.id;
                        axios.post("http://localhost:8080/movies",
                            {title: movie.title, year: movie.year, genre: movie.genre, franchise: franchise_id}
                        ).then(() => {
                            props.setMovies(newMovies)
                            props.setChart(chartData(newMovies))
                        }).catch(e =>{ props.setMessage("Error adding element"); console.log("Error adding element")});})
                    .catch(e =>{ props.setMessage("Error adding element"); console.log("Error adding element"); })


}

export default function AddButton(props){
    return (
        <Button
            data-testid={"addButton"}
            fullWidth
            onClick={
                () => {
                    addToList(props);
                }
            }
        >
            Add</Button>
    )
}