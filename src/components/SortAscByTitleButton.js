import {Button} from "@mui/joy";
import Movie from "../model/Movie";

function strcmp ( str1, str2 ) {
    return ( ( str1 == str2 ) ? 0 : ( ( str1 > str2 ) ? 1 : -1 ) );
}

export default function AscButton(props) {
    return (
        <Button
            fullWidth={true}
            onClick={
                ()=>{
                    let newMovies = [];

                    props.movies.forEach((movie) =>
                        {newMovies.push(new Movie(movie.title, movie.year, movie.genre, movie.franchise))})

                    newMovies.sort((a, b) => {return strcmp(a.title, b.title)})
                    props.setMovies(newMovies)
                }
            }
        >
            Sort by Title (Asc)
        </Button>
    )

}