import React,{useState, useEffect} from 'react'
import '../../stylesheet/Chart/Chart.scss'
import {fetchDailyData} from '../../api/api.js'
import { Line, Bar,} from 'react-chartjs-2'


const  Chart = () => {

    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        console.log(dailyData)
        fetchAPI()

    },[])

    const lineChart = (
        dailyData ? (
        <Line
        data={{
            labels: dailyData.map(({date})=> date),
            datasets: [{ 
                data: dailyData.map(({confirmed}) => confirmed),
                label: 'infected',
                borderColor: '#3333ff',
                fill: true

            }, {
                data: dailyData.map(({deaths}) => deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255,0,0,0.5)',
                fill: true

            }],
        }}
        />) : null
    )

    



    return (
        <div className="container_chart">
           {lineChart}
        </div>
    )
}

export default Chart
