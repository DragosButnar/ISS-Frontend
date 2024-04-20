import {Button} from "@mui/joy";
import Movie from "../model/Movie";
import {chartData, formatData} from "./GenrePieChart";
import {getYearDict} from "./MovieList";
import axios from "axios";

function updateList(props){
    let newMovies = [];
    let changeId;
    let changeTitle;
    let changeYear;
    let changeGenre;
    let changeFranchise;
    props.movies.forEach((movie) => {
        if(movie.title === props.title) {
            changeId = movie.id
            changeTitle = movie.title
            changeYear = props.year
            changeGenre = props.genre
            changeFranchise = null
            newMovies.push(new Movie(changeTitle, changeYear, changeGenre, changeFranchise))
        }
        else
            newMovies.push(new Movie(movie.title, movie.year, movie.genre, movie.franchise))
    })

    if(changeYear < 0){
        props.setMessage("Error updating element"); console.log("Error updating element")
        return;
    }

    axios.put("http://localhost:8080/movies/" + changeTitle,
        {title: changeTitle, year: changeYear, genre: changeGenre, franchise: changeFranchise}
    ).then(respone => {
        props.setMovies(newMovies)
        props.setChart(chartData(newMovies))
    }).catch(e => {
        props.setMessage("Movie to be updated not found! -> " + changeId);
        console.log("Error updating element -> " + changeId)
    })
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