import {FormLabel, Input} from "@mui/joy";
import * as React from "react";

export default function TitleInput(props){


    return(
    <Input size={"md"}
           type={"text"}
           startDecorator={
               <FormLabel>Title:</FormLabel>
           }
           value={props.title}
           id={"titleTXT"}
           name={"titleTXT"}
           data-testid={"titleTXT"}
           onChange={(event) => {props.setTitle(event.target.value)}}
    />
    )
}