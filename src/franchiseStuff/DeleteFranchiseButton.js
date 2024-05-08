import {Button} from "@mui/joy";
import axios from "axios";
import Franchise from "./Franchise";

function deleteFromList(props){
    let newFranchises = [];
    let deleteName;
    props.franchises.forEach((franchise) => {
        if(franchise.name !== props.name) {
            newFranchises.push(new Franchise(franchise.name))
        }
        else
            deleteName = franchise.name
    })

    axios.get("http://localhost:8080/franchises/" + deleteName)
        .then(response => {
            if(response.data.movies.length === 0){
                axios.delete("http://localhost:8080/franchises/" + deleteName)
                    .then(respone => {
                        props.setFranchises(newFranchises)
                    }).catch(e => {
                    props.setMessage("Franchise to be deleted not found! -> " + deleteName);
                    console.log("Error deleting element -> " + deleteName);
                })
            }
        })
}

export default function DeleteFranchiseButton(props){
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