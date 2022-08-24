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
import ImgHotel1 from '../../assets/img/laMorada.jpg';
import ImgHotel2 from '../../assets/img/atalaya.jpg';
import ImgHotel3 from '../../assets/img/adrianita.jpg';
import ImgHotel5 from '../../assets/img/montecasino.jpg';
import ImgHotel6 from '../../assets/img/sabiaQV.jpg';
import ImgHotel7 from '../../assets/img/casaLatina.jpg';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import LuggageRoundedIcon from '@mui/icons-material/LuggageRounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';

export default function WorkingSection() {
    return (
        <section className="pb-20 bg-gray-200 -mt-32">
            <div className=" mx-auto px-4">
                <div className="flex align-center justify-center">
                <div className="flex flex-wrap justify-content-between relative z-50" style={{ width:"70vw"}}>
                    <StatusCard color="logo2" icon={<LuggageRoundedIcon sx={{color:'gray'}}/>} title="Alojamiento" url="#Hoteles">
                        Los mejores hoteles en las sierras.
                    </StatusCard>
                <StatusCard color="logo2" icon={<RestaurantRoundedIcon />} title="Restaurantes" url="#Comidas">
                        Disfruta de la gastronomia de la zona.
                    </StatusCard>
                    <StatusCard
                        color="logo2"
                        className="flex justify-center items-center"
                        icon={<CameraAltRoundedIcon />}
                        title="Fotos"
                    >
                        Imagenes de nuestras mejores vistas.
                    </StatusCard>
                </div>
                </div>
                <div className="flex flex-wrap mt-20">
                    <div className="w-full px-4 mx-auto text-center" id='Hoteles' >
                        <H4 color="gray text-center">¿Dónde alojarse?</H4>
                    <div className="flex flex-wrap justify-center align-center">
                     <HotelCard
                        img={ImgHotel1}
                        position="Hostería"
                        name="LA MORADA"
                        url="https://tyr.com.ar/utu2022insc/inscriptionsshort?layout=formonline"
                    />
                     <HotelCard
                        img={ImgHotel2}
                        position="Hostería"
                        name="LA ATALAYA"
                    />
                     <HotelCard
                        img={ImgHotel3}
                        position="Hostal"
                        name="ADRIANITA"
                    />
                    <HotelCard
                        img={ImgHotel1}
                        position="Hotel"
                        name="MOUSAÍ"
                    />
                    <HotelCard
                        img={ImgHotel5}
                        position="Hotel"
                        name="MONTECASINO"
                    />
                  </div>
                 </div>

                   
                </div>
                <div className="flex flex-wrap mt-6 text-center">
                    <div className="w-full px-4 mx-auto" id='Comidas'>
                        <H4 color="gray">¿Dónde comer?</H4>
                    <div className="flex flex-wrap justify-center align-center">
                    <HotelCard
                        img={ImgHotel6}
                        position="Restaurante"
                        name="SABIA QUE VENIAS"
                    />
                    <HotelCard
                        img={ImgHotel7}
                        position="Restaurante"
                        name="CASA LATINA"
                    />
                  </div>
                 </div>

                   
                </div>
            </div>
        </section>
    );
}
