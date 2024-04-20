import {PieChart} from "@mui/x-charts/PieChart";

export function chartData(movieList){
    return formatData(getGenreDict(movieList))
}

function getGenreDict(movies){
    let data = {}
    movies.forEach(movie=>{
        if(movie.genre in data)
            data[movie.genre] += 1
        else
            data[movie.genre] = 1
    })
    return data
}

function formatData(data)
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


export default function GenrePieChart(props) {
    return (
        <PieChart
            series={[{ data: props.chart}]}
            height={200}
            slotProps={
                {
                    legend: {
                        hidden: true
                    }
                }
            }
        />
    )
}