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
import {useEffect, useState} from "react";
import Movie from "./model/Movie";
import {generate_movie_genre, generate_movie_title, generate_movie_year} from "./model/MovieGenerator";
import {FormGroup} from "@mui/material";
import AscButton from "./components/SortAscByTitleButton";
import DescButton from "./components/SortDescByTitleButton";
import GenrePieChart, {chartData, formatData} from "./components/GenrePieChart";
import {getYearDict} from "./components/MovieList.js";
import MovieScroll from "./components/MovieScroll";
import axios from "axios";
import async from "async";
import ErrorSnackbar from "./components/ErrorSnackbar";



function App() {
    const [t, sT] = React.useState('')
    const [y, sY] = React.useState(0)
    const [g, sG] = React.useState('')

    const [m, sM] = useState([])

    const [message, setMessage] = useState(null)

    const [pie, setPie] = useState([])
    useEffect(() => {
        async function fun(){
        const temp = []
        await axios.get("http://localhost:8080/movies")
            .then(response => {
                response.data.forEach(entry => temp.push(new Movie(entry.title, entry.year, entry.genre, entry.franchise)))
            })
        sM(temp)
        setPie(chartData(temp))
        }
        fun();
    }, []);

    return (
        <>
        <ErrorSnackbar message={message} setMessage={setMessage}/>
        <Box sx={{display:'column', flexDirection:'row',gap:2}}>
            <Box sx={{display:'flex', flexDirection:'row',gap:2}} id={"mainBox"}>
                <MovieList
                             movies={m} setMovies={sM}
                             title={t} setTitle={sT}
                             year={y} setYear={sY}
                             genre={g} setGenre={sG}
                             chart={pie} setChart={setPie}
                />
                <FormGroup>
                    <TitleInput title={t} setTitle={sT}/>
                    <YearInput year={y} setYear={sY}/>
                    <GenreList genre={g} setGenre={sG}/>
                </FormGroup>
            </Box>
            <Box sx={{display:'flex', flexDirection:'row',gap:2}}>
                <AddButton movies={m} setMovies={sM} title={t} setTitle={sT} year={y} setYear={sY} genre={g} setGenre={sG} chart={pie} setChart={setPie} message={message} setMessage={setMessage}/>
                <UpdateButton movies={m} setMovies={sM} title={t} setTitle={sT} year={y} setYear={sY} genre={g} setGenre={sG} chart={pie} setChart={setPie} message={message} setMessage={setMessage}/>
                <DeleteButton movies={m} setMovies={sM} title={t} setTitle={sT} year={y} setYear={sY} genre={g} setGenre={sG} chart={pie} setChart={setPie} message={message} setMessage={setMessage}/>
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
