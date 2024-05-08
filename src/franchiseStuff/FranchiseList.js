import {List, ListItem, ListItemButton, ListItemContent} from "@mui/joy";
import Franchise from "./Franchise";


export default function FranchiseList(props){
    const franchise_list = props.franchises.map((franchise, index) =>
        <ListItem itemID={"listItem_" + index.toString()} key={index} data-testid={"listItem_" + index.toString()}>
    <ListItemButton onClick={() =>
    {
        props.setName(franchise.name)
    }
}>
    <ListItemContent>
        {franchise.toString()}
    </ListItemContent>
    </ListItemButton>
    </ListItem>
);
    return (<List orientation={"vertical"} id={"franchiseList"}>{franchise_list}</List>);

}