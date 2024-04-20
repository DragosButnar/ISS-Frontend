import {BarChart, ChartContainer} from "@mui/x-charts";


const genres = ["Action", "Comedy", "Crime", "Romance", "Horror", "Drama", "Fantasy", "Historical", "SF", "Thriller",
    "Western", "Family", "Holiday"]

export function barData(movieList){
    return formatData(getGenreDict(movieList))
}

function getGenreDict(movies){
    let data = {}
    movies.forEach(movie=>{
        console.log(movie)
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
            let entry = {id: index, value: data[str], genre: str, label: str}
            newData.push(entry)
        }
    )
    return newData;
}


export default function MovieBarChart(props) {
    return (
        <BarChart
            dataset={props.chart}
            xAxis={[{ scaleType: 'band', dataKey: 'genre' }]}
            series={
                [{dataKey: 'genre', label: 'label'}]
        }/>
    )
}