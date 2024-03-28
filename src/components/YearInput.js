import {FormLabel, Input} from "@mui/joy";

export default function YearInput(props){
    return(
        <Input size={"md"}
               type={"number"}
               startDecorator={
                   <FormLabel>Year:</FormLabel>
               }
               id={"yearTXT"}
               data-testid={"yearTXT"}
               value={props.year}
               onChange={(event)=>{props.setYear(event.target.value)}}
        />
    )
}