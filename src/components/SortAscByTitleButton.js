import {Button} from "@mui/joy";
import Movie from "../model/Movie";

export default function AscButton(props) {
    return (
        <Button
            fullWidth={true}
            onClick={
                ()=>{
                    let newMovies = [];

                    props.movies.forEach((movie) =>
                        {newMovies.push(new Movie(movie.title, movie.year, movie.genre, movie.id))})

                    newMovies.sort((a, b) => {return a.title.localeCompare(b.title)})
                    props.setMovies(newMovies)
                }
            }
        >
            Sort by Title (Asc)
        </Button>
    )

}