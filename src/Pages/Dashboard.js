import React, {useEffect, useState} from 'react'
import Card from '../Components/Cards/carditems.js'
import CountryPicker from '../Components/country picker/Countrypicker.js'
import Chart from '../Components/Chart/Chart.js'
import {fetchData} from '../api/api.js'

import  '../stylesheet/Dashboard.scss'

function Dashboard() {
  
  const [data, setData] = useState({
    data: {}
  })

 
  useEffect(() => {
   
    ( async ()=>{
      const fetchMe = await fetchData();
      console.log(fetchMe)
      
      setData({
        ...data,
        data: fetchMe
       
       })
      }
    )();
   
  }, [])

    return (
     
     
      <div className="container">
      <Card data={data.data}/>
      <CountryPicker/>
      <Chart/>

      </div>
    )
}

export default Dashboard
