import React from 'react'
import '../../stylesheet/Cards/cards.scss'
import {Card, CardContent, Typography, Grid } from '@material-ui/core'


 function carditems([data], {confirmed, recovered, deaths, lastUpdate})  {
     
    console.log(data)
     if(!data) {
         return 'loading...'
     } 

    

   
    return (
        //We will find the number of people recovered death and confirmed
         
        <div className="container">
            <Grid container spacing={3} justify="center">
                    <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">{data}</Typography>
                        <Typography color="textSecondary">REAL DATA</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>

                    </CardContent>
                    </Grid>
                    <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary">REAL DATA</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>

                    </CardContent>
                    </Grid>
                    <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Confirmed</Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary">REAL DATA</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>

                    </CardContent>
                    </Grid>
            </Grid>
        </div>
    )
}

export default carditems


