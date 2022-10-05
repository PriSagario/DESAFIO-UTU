import { Box } from '@mui/system';
import CarouselComponent from './Carousel';

export default function AltiSection() {
    return (
        
            <div className='container' id='Altimetrias'>
                <h1 className='font-ALTI text-center margin-fotos text-center'> ALTIMETRÍAS </h1>
                <Box className="flex items-center justify-center text-center w-full">
                    <CarouselComponent/>
                </Box>
            </div>

    );
}
