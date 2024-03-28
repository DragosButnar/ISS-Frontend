import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function GenreList(props) {

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="genre-label">Genre</InputLabel>
                <Select
                    labelId="genre-label"
                    id="select-genre"
                    value={props.genre}
                    onChange={(event) => {props.setGenre(event.target.value)}}
                    autoWidth
                    label="Genre"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="Action">Action</MenuItem>
                    <MenuItem value="Comedy">Comedy</MenuItem>
                    <MenuItem value="Crime">Crime</MenuItem>
                    <MenuItem value="Romance">Romance</MenuItem>
                    <MenuItem value="Horror">Horror</MenuItem>
                    <MenuItem value="Drama">Drama</MenuItem>
                    <MenuItem value="Fantasy">Fantasy</MenuItem>
                    <MenuItem value="Historical">Historical</MenuItem>
                    <MenuItem value="SF">SF</MenuItem>
                    <MenuItem value="Thriller">Thriller</MenuItem>
                    <MenuItem value="Western">Western</MenuItem>
                    <MenuItem value="Family">Family</MenuItem>
                    <MenuItem value="Holiday">Holiday</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}