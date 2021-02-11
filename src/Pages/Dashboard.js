import React, {useEffect} from 'react'
import Card from '../Components/Cards/carditems.js'
import CountryPicker from '../Components/country picker/Countrypicker.js'
import Chart from '../Components/Chart/Chart.js'
import {fetchData} from '../api/api.js'

import  '../stylesheet/Dashboard.scss'

function Dashboard() {

  useEffect(() => {
    async function fetchListening() {
      await fetchData();
    }
    fetchListening();
    console.log(fetchListening());
  }, [])

    return (
      <div className="container">
      <Card/>
      <CountryPicker/>
      <Chart/>

      </div>
    )
}

export default Dashboard
