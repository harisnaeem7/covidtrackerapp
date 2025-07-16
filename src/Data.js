import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useEffect } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function RowAndColumnSpacing() {
    const [apiData, setData] = React.useState({}); 
    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/all')
        .then(response => response.json())
        .then(data => 
            setData(data)
    )
        
    }, []);
    console.log(apiData);

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={6}>
          <Item>Total Cases: <b>{apiData.cases}</b></Item>
        </Grid>
        <Grid size={6}>
           
          <Item>Active Cases: <b>{apiData.active}</b></Item>
        </Grid>
        <Grid size={6}>
        <Item>Total Deaths: <b>{apiData.deaths}</b></Item>
        </Grid>
        <Grid size={6}>
          <Item>Recovered: <b>{apiData.recovered}</b></Item>
        </Grid>
        <Grid size={6}>
          <Item>Cases Today: <b>{apiData.todayCases}</b></Item>
        </Grid>
        <Grid size={6}>
          <Item>Deaths Today: <b>{apiData.todayDeaths}</b></Item>
        </Grid>
        <Grid size={6}>
          <Item>Recovered Today: <b>{apiData.todayRecovered}</b></Item>
        </Grid>
        <Grid size={6}>
          <Item>Critical: <b>{apiData.critical}</b></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
