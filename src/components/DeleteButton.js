import {Button} from "@mui/joy";
import Movie from "../model/Movie";
import {chartData, formatData} from "./GenrePieChart";
import {getYearDict} from "./MovieList";

function deleteFromList(props){
    let newMovies = [];
    props.movies.forEach((movie) => {
        if(movie.title !== props.title)
            newMovies.push(new Movie(movie.title, movie.year, movie.genre, movie.id))
    })

    props.setMovies(newMovies)
    props.setChart(chartData(newMovies))
}

export default function DeleteButton(props){
    return (
        <Button
            fullWidth
            onClick={
                ()=>{
                    deleteFromList(props)
                }
            }
        >
            Delete</Button>
    )
}