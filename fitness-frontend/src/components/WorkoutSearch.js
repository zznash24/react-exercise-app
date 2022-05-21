import React from "react";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function WorkoutSearch(props) {
    return (
        <Paper className="paper-Form">
            <Typography component='div'>
                Search for a Exercise
                <b>Exercise Name</b>
                <b>Targetted Muscle </b>
                <b>Piece of Equipment</b>
            </Typography>
            <form className="Form">
                <FormControl>
                    <InputLabel>Search By</InputLabel>
                    <Select name="searchBy" label="Workout Search" value={props.values.searchBy} onChange={props.handleChange}>
                        <MenuItem value="name">Exercise Name</MenuItem>
                        <MenuItem value="target">Target Muscle</MenuItem>
                        <MenuItem value="equipment">Equipment</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <TextField value={props.values.searchTerm} onChange={props.handleChange} name="searchTerm" label="Search" />
                </FormControl>
                <Button onClick={(event) => {
                        event.preventDefault();
                        props.handleSubmit(props.values, props.searchByHolder, props.searchTermHolder);
                    }}>Submit</Button>
            </form>
        </Paper >
    )
}
export default WorkoutSearch;