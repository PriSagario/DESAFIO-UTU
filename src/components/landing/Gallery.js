import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {useEffect} from 'react';
import Aos from "aos";

export default function Galeria() {

  useEffect(() => {
    Aos.init({
      duration: 2000,
    })
  }, [])

  return (
    <Box sx={{ width: '80%', margin: 'auto'}}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
      img: 'https://i.ibb.co/ZzPb5wN/DSC01807-CIEUDG22-43231147-SIRONI-FRANCISCO-1-1-min.jpg',
  },
  {
      img: 'https://i.ibb.co/mbmcZVs/DSC01869-CIEUDG22-43231147-SIRONI-FRANCISCO-min.jpg',
  },
  {
      img: 'https://i.ibb.co/T0WQ13b/DSC01863-CIEUDG22-43231147-SIRONI-FRANCISCO-min.jpg',
  },
  {
      img: 'https://i.ibb.co/TwBRGNn/DSC01833-CIEUDG22-43231147-SIRONI-FRANCISCO-min.jpg',
  },
  {
      img: 'https://i.ibb.co/MGFQrfZ/DSC01825-CIEUDG22-43231147-SIRONI-FRANCISCO-1-min.jpg',
  },
  {
    img: 'https://i.ibb.co/4j8kBZt/DSC01840-CIEUDG22-43231147-SIRONI-FRANCISCO-1-1-min.jpg',
  },
];


