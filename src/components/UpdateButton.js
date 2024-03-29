import {Button} from "@mui/joy";
import Movie from "../model/Movie";
import {chartData, formatData} from "./GenrePieChart";
import {getYearDict} from "./MovieList";

function updateList(props){
    let newMovies = [];
    props.movies.forEach((movie) => {
        if(movie.title === props.title)
            newMovies.push(new Movie(movie.title, props.year, props.genre, movie.id))
        else
            newMovies.push(new Movie(movie.title, movie.year, movie.genre, movie.id))
    })

    props.setMovies(newMovies)
    props.setChart(chartData(newMovies))
}

export default function UpdateButton(props){
    return (
        <Button
            fullWidth
            onClick={
                ()=>{
                    updateList(props)
                }
            }
        >
            Update</Button>
    )
}