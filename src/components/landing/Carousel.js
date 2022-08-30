import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

export default function CarouselComponent(){
    return (
        <Carousel statusFormatter={function(currentItem, total){return `${currentItem} de ${total}`}} autoPlay={true}>
            <div>
                <img src="./assets/img/altimetria10k.jpg"/>
            </div>
            <div>
                <img src="./assets/img/altimetria20k.jpg" />
            </div>
            <div>
                <img src="./assets/img/altimetria35k.jpg" />
            </div>
            <div>
                <img src="./assets/img/altimetria55k.jpg" />
            </div>
            <div>
                <img src="./assets/img/altimetriaVA.jpg" />
            </div>
        </Carousel>
    );
}