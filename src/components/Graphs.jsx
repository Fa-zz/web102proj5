import { useState, useEffect } from "react";
import { formatDateDay } from '../formatDate.js';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Graphs = ({forecasts}) => {
    const [firstGraph, setFirstGraph] = useState([]);
    const [secondGraph, setSecondGraph] = useState([]);

    useEffect(() => {
        const firstData = forecasts.map(forecast => ({
            day: formatDateDay(forecast.datetime),
            max_temp: forecast.max_temp,
            min_temp: forecast.min_temp
        }));
        const secondData = forecasts.map(forecast => ({
            day: formatDateDay(forecast.datetime),
            pop: forecast.pop,
            clouds: forecast.clouds
        }));
        console.log(firstData);
        console.log(secondData);
        setFirstGraph(firstData);
        setSecondGraph(secondData)
    }, [forecasts]);

    return (
        <div>
                <p>Maximum vs. minimum temperatures</p>
                <LineChart
                width={600}
                height={200}
                data={firstGraph}
                margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="max_temp" name="Maximum temperature (°F)" stroke="#8884d8" />
                <Line type="monotone" dataKey="min_temp" name="Minimum temperature (°F)" stroke="#82ca9d" />
            </LineChart>

            <p>Probability of rain vs. avg. cloud coverage</p>
            <LineChart
                width={600}
                height={200}
                data={secondGraph}
                margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pop" name="Prob. of rain (%)" stroke="#3055baff" />
                <Line type="monotone" dataKey="clouds" name="Avg. total cloud coverage (%)" stroke="#d173a1ff" />
            </LineChart>
        </div>
    )
}

export default Graphs;