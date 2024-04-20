import {Button} from "@mui/joy";
import Movie from "../model/Movie";
import {chartData, formatData} from "./GenrePieChart";
import {getYearDict} from "./MovieList";
import axios from "axios";

function deleteFromList(props){
    let newMovies = [];
    let deleteTitle;
    props.movies.forEach((movie) => {
        if(movie.title !== props.title) {
            newMovies.push(new Movie(movie.title, movie.year, movie.genre, movie.franchise))
        }
        else
            deleteTitle = movie.title
    })

    axios.delete("http://localhost:8080/movies/" + deleteTitle)
        .then(respone => {
        props.setMovies(newMovies)
        props.setChart(chartData(newMovies))
    }).catch(e => {
        props.setMessage("Movie to be deleted not found! -> " + deleteTitle);
        console.log("Error deleting element -> " + deleteTitle);
    })
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