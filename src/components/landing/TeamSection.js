import { color } from '@mui/system';
import Title from 'components/landing/Title';
import CarouselComponent from './Carousel';

export default function TeamSection() {
    return (
        <section>
            <div className='container' id='Altimetrias'>
                <h1 className='font-ALTI text-center margin-fotos'> ALTIMETRÍAS </h1>
                <Title>
                    <CarouselComponent/>
                </Title>
            </div>
        </section>
    );
}
