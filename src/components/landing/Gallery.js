import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Galeria() {
  return (
    <Box sx={{ width: '80%', margin: 'auto' }}>
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
        img: 'https://i.ibb.co/wNsBsRL/DSC01807-CIEUDG22-43231147-SIRONI-FRANCISCO-1-1.jpg',
    },
    {
        img: 'https://i.ibb.co/85K2bMs/DSC01869-CIEUDG22-43231147-SIRONI-FRANCISCO.jpg',
    },
    {
        img: 'https://i.ibb.co/2nzc4zP/DSC01863-CIEUDG22-43231147-SIRONI-FRANCISCO.jpg',
    },
    {
        img: 'https://i.ibb.co/0tQYc62/DSC01833-CIEUDG22-43231147-SIRONI-FRANCISCO.jpg',
    },
    {
        img: 'https://i.ibb.co/BfsxPn9/DSC01825-CIEUDG22-43231147-SIRONI-FRANCISCO-1.jpg',
    },
    {
      img: 'https://i.ibb.co/wdVFj3v/DSC01840-CIEUDG22-43231147-SIRONI-FRANCISCO-1-1.jpg',
    },
];


