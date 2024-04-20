import {React} from 'react';
import {List, ListItem, ListItemButton, ListItemContent} from "@mui/joy";


function MovieList(props){
    const movies_list = props.movies.map((movie, index) =>
        <ListItem itemID={"listItem_" + index.toString()} key={index} data-testid={"listItem_" + index.toString()}>
            <ListItemButton onClick={() =>
                {
                    props.setTitle(movie.title);
                    props.setYear(movie.year);
                    props.setGenre(movie.genre)
                }
            }>
                <ListItemContent>
                    {movie.toString()}
                </ListItemContent>
            </ListItemButton>
        </ListItem>
    );
    return (
        <List orientation={"vertical"} id={"movieList"} data-testid={"movieList"} height={1/4}>
            {movies_list}
        </List>
    )

}

export default MovieList