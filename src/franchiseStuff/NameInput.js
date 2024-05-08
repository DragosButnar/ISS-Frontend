import {FormLabel, Input} from "@mui/joy";
import * as React from "react";

export default function NameInput(props){
    return(
        <Input size={"md"}
    type={"text"}
    startDecorator={
        <FormLabel>Name:</FormLabel>
}
    value={props.name}
    id={"nameTXT"}
    name={"nameTXT"}
    data-testid={"nameTXT"}
    onChange={(event) => {props.setName(event.target.value)}}
    />
)
}