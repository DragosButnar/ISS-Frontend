import {Button} from "@mui/joy";
import Movie from "../model/Movie";
import {getYearDict, setYearDict} from "./MovieList";
import {formatData} from "./YearPieChart";

export function addToList(props){
        let newMovies = [];
        props.movies.forEach((movie) => {newMovies.push(new Movie(movie.title, movie.year, movie.genre, movie.id))})

        let movie = new Movie(props.title, props.year, props.genre)

        if(newMovies.find((m) => Movie.equal(m, movie)) === undefined)
            newMovies.push(movie)

        props.setMovies(newMovies)
        props.setChart(formatData(getYearDict(newMovies)))
}

export default function AddButton(props){
    return (
        <Button
            data-testid={"addButton"}
            fullWidth
            onClick={
                () => addToList(props)
                }
        >
            Add</Button>
    )
}