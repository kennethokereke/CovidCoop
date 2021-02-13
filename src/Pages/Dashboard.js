import React, {useEffect, useState, Component} from 'react'
import Card from '../Components/Cards/carditems.js'
import CountryPicker from '../Components/country picker/Countrypicker.js'
import Chart from '../Components/Chart/Chart.js'
import {fetchData} from '../api/api.js'

import  '../stylesheet/Dashboard.scss'

class  Dashboard extends Component {
  
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({data: data});
  }

   
  
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    // console.log(fetchedData)
    this.setState({data: fetchedData, country: country});

  
    

  }
   render() {
     const {data, country} = this.state
    return (
     
     
      <div className="container">
        
      <Card data={data}/>
      <CountryPicker className="container_picker" handleCountryChange={this.handleCountryChange}/>
      <Chart data={data} country={country}/>

      </div>
    )

   }
   
}

export default Dashboard
