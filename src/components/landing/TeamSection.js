import Title from 'components/landing/Title';
import CarouselComponent from './Carousel';

export default function TeamSection() {
    return (
        <section className="pt-4">
            <div className="max-w-7xl mx-auto px-4" id="Altimetrias" >
                <Title heading="ALTIMETRIAS" >
                    <CarouselComponent/>
                </Title>
            </div>
        </section>
    );
}
