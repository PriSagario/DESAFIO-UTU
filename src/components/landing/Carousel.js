import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Image1 from '../../assets/img/altimetria10k.jpg';
import Image2 from '../../assets/img/altimetria20k.jpg';
import Image3 from '../../assets/img/altimetria35k.jpg';
import Image4 from '../../assets/img/altimetriaVA.jpg';
import Image5 from '../../assets/img/altimetria55k.jpg';

export default function CarouselComponent(){
    return (
        <Carousel statusFormatter={function(currentItem, total){return `${currentItem} de ${total}`}}>
            <div>
                <img src={Image1}/>
            </div>
            <div>
                <img src={Image2} />
            </div>
            <div>
                <img src={Image3} />
            </div>
            <div>
                <img src={Image4} />
            </div>
            <div>
                <img src={Image5} />
            </div>
        </Carousel>
    );
}