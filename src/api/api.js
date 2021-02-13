import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';


//async await deals with promises and much easier to read and write
export const fetchData = async (country) => {
    //to make it dynamic this is the almost last step
    let changeableUrl = url;
    //if their is a country
    if(country) {
        changeableUrl = `${url}/countries/${country}`;
    }
    try {
        //destructoring the data from the reponse
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableUrl);
       
        //taking the parts of the data that we need
        return  {confirmed, recovered, deaths, lastUpdate};
        
    } catch(error) {
            console.error(error);

    }

    

}

//grabbing daily data for the chart
export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`)
        // console.log(data);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))
        return modifiedData;
    } catch(error) {

    }
}

//fetching data for countries
export const fetchCountry = async () => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name)
    } catch(error) {
        console.log(error)
    }
}

