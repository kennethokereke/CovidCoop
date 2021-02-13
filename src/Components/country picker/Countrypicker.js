import React,{useState, useEffect} from 'react'
import '../../stylesheet/Countrypicker/Countrypicker.scss'
import {NativeSelect, FormControl} from '@material-ui/core'
import { fetchCountry } from '../../api/api.js'

const Countrypicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchCountries] = useState([])

    useEffect(() => {
        const fetchAPI = async() => {
            setFetchCountries(await fetchCountry());

        }
        fetchAPI();
    }, [setFetchCountries])

  

    
 
    
    
    return (
      
             <FormControl className="FormControl" >
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>

       
    )
}

export default Countrypicker
