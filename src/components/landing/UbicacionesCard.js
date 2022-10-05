import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';

export default function UbicacionesCard({ position, name, url }) {
  const theme = useTheme();

  return (
    <Card className='styles-ubis' sx={{backgroundColor:"#d7d7d4", borderRadius:"1rem"}}>
      <iframe src={url}
      width="800" 
      height="300" 
      loading="lazy" 
      className='maps-styles'
      referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      <CardContent className='size-maps' sx={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
      <PlaceRoundedIcon/>
      <div className='font-ubis'>
        <h3>{position}</h3> 
      </div>
      <div className='font-expo'>
        <h3>{name}</h3> 
      </div>
        </CardContent>
    </Card>
  );
}
