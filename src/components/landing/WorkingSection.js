import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Icon from '@material-tailwind/react/Icon';
import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import LeadText from '@material-tailwind/react/LeadText';
import Paragraph from '@material-tailwind/react/Paragraph';
import StatusCard from 'components/landing/StatusCard';
import Teamwork from 'assets/img/teamwork.jpeg';
import HotelCard from 'components/landing/HotelCard';
import ImgHotel1 from '../../assets/img/montain.jpg';

export default function WorkingSection() {
    return (
        <section className="pb-20 bg-gray-200 -mt-32">
            <div className="container  mx-auto px-4" id='aca-distancias'>
                <div className="flex justify-content-between relative z-50">
                    <StatusCard color="logo1" icon="A" title="Alojamiento">
                        Los mejores hoteles en las sierras.
                    </StatusCard>
                <StatusCard color="logo1" icon="R" title="Restaurantes">
                        Disfruta de la gastronomia de la zona.
                    </StatusCard>
                    <StatusCard
                        color="logo1"
                        icon="F"
                        title="Fotos"
                    >
                        Imagenes de nuestras mejores vistas.
                    </StatusCard>
                </div>
                <div className="flex flex-wrap mt-20">
                    <div className="w-full md:w-8/12 px-16 ">
                        <H4 color="gray">¿Dónde alojarse?</H4>
                    <div className="flex flex-wrap">
                    <HotelCard
                        img={ImgHotel1}
                        position="Hostería"
                        name="LA MORADA"
                    />
                    <HotelCard
                        img={ImgHotel1}
                        position="Hostería"
                        name="LA ATALAYA"
                    />
                    <HotelCard
                        img={ImgHotel1}
                        position="Hostal"
                        name="ADRIANITA"
                    />
                    <HotelCard
                        img={ImgHotel1}
                        position="Hotel"
                        name="MOUSAÍ"
                    />
                    <HotelCard
                        img={ImgHotel1}
                        position="Hotel"
                        name="MONTECASINO"
                    />
                  </div>
                 </div>

                   
                </div>
                <div className="flex flex-wrap mt-20">
                    <div className="w-full md:w-8/12 px-4 mx-auto">
                        <H4 color="gray">¿Dónde comer?</H4>
                    <div className="flex flex-wrap">
                    <HotelCard
                        img={ImgHotel1}
                        position="Hostería"
                        name="LA MORADA"
                    />
                    <HotelCard
                        img={ImgHotel1}
                        position="Hostería"
                        name="LA ATALAYA"
                    />
                  </div>
                 </div>

                   
                </div>
            </div>
        </section>
    );
}
