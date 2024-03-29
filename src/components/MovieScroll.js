import {React} from 'react';
import {Box, List, ListItem, ListItemButton, ListItemContent} from "@mui/joy";
import InfiniteScroll from "react-infinite-scroll-component";
import Movie from "../model/Movie";
import {generate_movie_genre, generate_movie_title, generate_movie_year} from "../model/MovieGenerator";
import {chartData, formatData} from "./GenrePieChart";

const CHART_CAPACITY = Number.MAX_VALUE
const CHART_MORE_VALUE = 10
const CHART_MORE_DELAY = 1500

function generateMovies(amount) {
    let movies = [];
    while(amount > 0){
        movies.push(new Movie(generate_movie_title(), generate_movie_year(),generate_movie_genre()))
        amount-=1
    }
    return movies
}

function fetchMore(props) {
    if(props.movies.length <= CHART_CAPACITY)
        setTimeout(()=>{
            let newMovies = props.movies.concat(generateMovies(CHART_MORE_VALUE))
            props.setMovies(newMovies); props.setChart(chartData(newMovies))
        }, CHART_MORE_DELAY)
    else
        props.setMore(false)
}

function MovieScroll(props){
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
        <InfiniteScroll
                        id={"movieScroll"}
                        next={()=>fetchMore(props)}
                        hasMore={props.more}
                        loader={<p>MOAR!</p>}
                        endMessage={<p>DONE!</p>}
                        dataLength={props.movies.length}
                        height={200}
                        scrollableTarget={"mainBox"}
        >
            {movies_list}
        </InfiniteScroll>
    )

}

export default MovieScroll