import './App.css';
import  MovieList  from './components/MovieList.js';
import {Box} from "@mui/joy";
import TitleInput from "./components/TitleInput";
import YearInput from "./components/YearInput";
import GenreList from "./components/GenreList";
import * as React from "react";
import AddButton from "./components/AddButton";
import UpdateButton from "./components/UpdateButton";
import DeleteButton from "./components/DeleteButton";
import {useState} from "react";
import Movie from "./model/Movie";
import {generate_movie_genre, generate_movie_title, generate_movie_year} from "./model/MovieGenerator";
import {FormGroup} from "@mui/material";
import AscButton from "./components/SortAscByTitleButton";
import DescButton from "./components/SortDescByTitleButton";
import GenrePieChart, {chartData, formatData} from "./components/GenrePieChart";
import {getYearDict} from "./components/MovieList.js";
import MovieScroll from "./components/MovieScroll";



function App() {
    let initialMovies = [
        new Movie(generate_movie_title(), generate_movie_year(), generate_movie_genre()),
        new Movie(generate_movie_title(), generate_movie_year(), generate_movie_genre()),
        new Movie(generate_movie_title(), generate_movie_year(), generate_movie_genre()),
        new Movie(generate_movie_title(), generate_movie_year(), generate_movie_genre()),
        new Movie(generate_movie_title(), generate_movie_year(), generate_movie_genre()),
        new Movie(generate_movie_title(), generate_movie_year(), generate_movie_genre()),
        new Movie(generate_movie_title(), generate_movie_year(), generate_movie_genre()),
        new Movie(generate_movie_title(), generate_movie_year(), generate_movie_genre()),
        new Movie(generate_movie_title(), generate_movie_year(), generate_movie_genre()),
        new Movie(generate_movie_title(), generate_movie_year(), generate_movie_genre()),
        new Movie(generate_movie_title(), generate_movie_year(), generate_movie_genre()),
        new Movie(generate_movie_title(), 2024, generate_movie_genre()),
        new Movie("test", 2024, "Family")
    ];
    const [t, sT] = React.useState('')
    const [y, sY] = React.useState(0)
    const [g, sG] = React.useState('')

    const [m, sM] = useState(initialMovies)

    const [hasMore, setHasMore] = useState(true)

    const [pie, setPie] = useState(chartData(initialMovies))


    return (
        <>
        <Box sx={{display:'column', flexDirection:'row',gap:2}}>
            <Box sx={{display:'flex', flexDirection:'row',gap:2}} id={"mainBox"}>
                <MovieScroll
                             movies={m} setMovies={sM}
                             more={hasMore} setMore={setHasMore}
                             title={t} setTitle={sT}
                             year={y} setYear={sY}
                             genre={g} setGenre={sG}
                             chart={pie} setChart={setPie}/>
                <FormGroup>
                    <TitleInput title={t} setTitle={sT}/>
                    <YearInput year={y} setYear={sY}/>
                    <GenreList genre={g} setGenre={sG}/>
                </FormGroup>
            </Box>
            <Box sx={{display:'flex', flexDirection:'row',gap:2}}>
                <AddButton movies={m} setMovies={sM} title={t} setTitle={sT} year={y} setYear={sY} genre={g} setGenre={sG} chart={pie} setChart={setPie}/>
                <UpdateButton movies={m} setMovies={sM} title={t} setTitle={sT} year={y} setYear={sY} genre={g} setGenre={sG} chart={pie} setChart={setPie}/>
                <DeleteButton movies={m} setMovies={sM} title={t} setTitle={sT} year={y} setYear={sY} genre={g} setGenre={sG} chart={pie} setChart={setPie}/>
            </Box>
            <Box sx={{display:'flex', flexDirection:'row',gap:2}}>
                <AscButton movies={m} setMovies={sM}/>
                <DescButton movies={m} setMovies={sM}/>
            </Box>
            <GenrePieChart movies={m} chart={pie} setChart={setPie}/>
        </Box>
        </>
    )
}

export default App;
