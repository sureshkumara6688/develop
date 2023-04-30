
import React from "react";
import './index.css'
import { useEffect, useState } from "react";
import axios from "axios";

import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';
const pdata = [
    {
        name: 'updated',
        count: 1682872118065

    },
    {
        name: 'cases',
        count: 687082876
    },
    {
        name: 'todayCases',
        count: 21014
    },
    {
        name: 'deaths',
        count: 6863757
    },
    {
        name: 'todayDeaths',
        count: 91
    },
    {
        name: 'recovered',
        count: 659626119
    },
    {
        name: 'todayRecovered',
        count: 34588
    },
    {
        name: 'active',
        count: 20593000
    },
    {
        name: 'critical',
        count: 39307
    },
    {
        name: 'casesPerOneMillion',
        count: 88146
    },
    {
        name: 'deathsPerOneMillion',
        count: 8808.6
    },
    {
        name: 'tests',
        count: 6977666918
    },
    {
        name: 'deathsPerOneMillion',
        count: 880.6899
    },
    {
        name: 'testsPerOneMillion',
        count: 878253.48
    },
    {
        name: 'population',
        count: 7944935131
    },

    {
        name: 'oneCasePerPeople',
        count: 0
    },
    {
        name: 'oneDeathPerPeople',
        count: 0
    },
    {
        name: 'oneTestPerPeople',
        count: 0
    },
    {
        name: 'activePerOneMillion',
        count: 2591.97
    },
    {
        name: 'recoveredPerOneMillion',
        count: 83024.73
    },
    {
        name: 'criticalPerOneMillion',
        count: 4.95
    },
    {
        name: 'affectedCountries',
        count: 231
    },
];


function Graph() {
    const [world, setWorld] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [scatter, setScatter] = useState([{}])


    useEffect(() => {

        axios
            .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
            .then((response) => {
                setWorld(response.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);



    console.log(world)
    return (<>
      <h1>Line Graph In Corono Cases</h1>
        <div className="headers">
            
            <div className="lefts">
                <li> <a className="link" href="#">Contact</a></li>
                <li> <a className="link" href="#">Charts and Maps</a></li>
                <p> Sidebar</p>
            </div>
        <div className="line">
            
            <ResponsiveContainer   aspect={6}>
                <LineChart data={pdata} >
                    <CartesianGrid />
                    <XAxis  dataKey="name"
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    
                    <Line dataKey="count"
                        stroke="red" activeDot={{ r: 23 }} />
                        <h3>Various list of Cases</h3>
                </LineChart>
            </ResponsiveContainer>
        </div>
        </div>
    </>)
}

export default Graph;