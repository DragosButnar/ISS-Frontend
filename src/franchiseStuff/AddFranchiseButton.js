import {Button} from "@mui/joy";
import axios from "axios";
import Franchise from "./Franchise";


export function addToFranchiseList(props){
    let newFranchises = [];
    props.franchises.forEach((franchise) => {newFranchises.push(new Franchise(franchise.name))})

    if(props.name === ""){
        props.setMessage("Error adding element"); console.log("Error adding element")
        return;
    }

    let franchise = new Franchise(props.name)


    if(newFranchises.find((f) => Franchise.equal(f, franchise)) === undefined)
        newFranchises.push(franchise)

    axios.post("http://localhost:8080/franchises",
        {name: franchise.name}
    ).then(() => {
        props.setFranchises(newFranchises)
    }).catch(e =>{ props.setMessage("Error adding element"); console.log("Error adding element")});
}

export default function AddFranchiseButton(props){
    return (
        <Button
            data-testid={"addFranchiseButton"}
    fullWidth
    onClick={
    () => {
        addToFranchiseList(props);
    }
}
>
    Add</Button>
)
}