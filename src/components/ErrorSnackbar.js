import {Snackbar} from "@mui/joy";

export default function ErrorSnackbar(props){
    if(props.message == null)
        return null;
    return (
        <Snackbar
            open={true}
            autoHideDuration={1000}
            onClose={()=>props.setMessage(null)}
        >{props.message}</Snackbar>
    )
}