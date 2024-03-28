import {PieChart} from "@mui/x-charts/PieChart";

export function formatData(data)
{
    const newData = []
    Object.keys(data).forEach((str, index) =>
        {
            let entry = {id: index, value: data[str], label: str}
            newData.push(entry)
        }
    )
    return newData;
}


export default function YearPieChart(props) {
    return (
        <PieChart
            series={[{ data: props.chart}]}
            height={200}
        />
    )
}