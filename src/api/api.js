import axios from 'axios'

const url = `https://covid19.mathdro.id/api`;

//async await deals with promises and much easier to read and write
export const fetchData = async () => {
    try {
        //destructoring the data from the reponse
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url);
       
        //taking the parts of the data that we need
        return  {confirmed, recovered, deaths, lastUpdate};
        
    } catch(error) {
            console.error(error);

    }

    

}

