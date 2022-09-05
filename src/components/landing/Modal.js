/* import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
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

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}></Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>
      {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <NestedModal>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              loading="lazy"
              />
              </NestedModal>
          </ImageListItem>
        ))}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Text in a modal</h2>
          <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}
 */