import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import StatusCard from 'components/landing/StatusCard';
import HotelCard from 'components/landing/HotelCard';
import FoodCard from 'components/landing/FoodCard';
import ImgHotel1 from '../../assets/img/laMorada.jpg';
import ImgHotel2 from '../../assets/img/atalaya.jpg';
import ImgHotel3 from '../../assets/img/adrianita.jpg';
import ImgHotel4 from '../../assets/img/mousai.jpg';
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
                    <StatusCard color="logo2" icon={<LuggageRoundedIcon sx={{color:'black'}}/>} title="Alojamiento" url="#Hoteles">
                       <p className="font-bold color-black"> Los mejores hoteles en las sierras.</p>
                    </StatusCard>
                <StatusCard color="logo2" icon={<RestaurantRoundedIcon />} title="Restaurantes" url="#Comidas">
                        Disfruta de la gastronomia de la zona.
                    </StatusCard>
                    <StatusCard
                        color="logo2"
                        className="flex justify-center items-center"
                        icon={<CameraAltRoundedIcon />}
                        title="Fotos"
                        url="#Fotos"
                    >
                        Imagenes de nuestras mejores vistas.
                    </StatusCard>
                </div>
                </div>
                <div className="flex flex-wrap mt-20">
                    <div className="w-full px-4 mx-auto text-center" id='Hoteles' >
                        <H4 color="gray text-center">¿Dónde alojarse?</H4>
                    <div className="flex flex-wrap justify-center align-center" style={{margin: 'auto'}}>
                     <HotelCard
                        img={ImgHotel1}
                        position="Hostería"
                        name="LA MORADA"
                        url="http://la-morada-hosteria-hostel.allcordobahotels.com/es/"
                    />
                     <HotelCard
                        img={ImgHotel2}
                        position="Hostería"
                        name="LA ATALAYA"
                        url="http://www.laatalaya.com.ar/"
                    />
                     <HotelCard
                        img={ImgHotel3}
                        position="Hostal"
                        name="ADRIANITA"
                        url="https://hostaladrianita.com.ar/"
                    />
                    <HotelCard
                        img={ImgHotel4}
                        position="Hotel"
                        name="MOUSAÍ"
                        url="http://www.mousai.com.ar/"
                    />
                    <HotelCard
                        img={ImgHotel5}
                        position="Hotel"
                        name="MONTECASINO"
                        url="http://www.hotelmontecassino.com.ar/?gclid=Cj0KCQjwgO2XBhCaARIsANrW2X3xYiJnApCctbWE-6J0bnsu6CcTmpGkw9-IngvkdGkHvbaoi69wQ8caAq0SEALw_wcB"
                    />
                  </div>
                 </div>

                   
                </div>
                <div className="flex flex-wrap mt-6 text-center">
                    <div className="w-full px-4 mx-auto" id='Comidas'>
                        <H4 color="gray">¿Dónde comer?</H4>
                    <div className="flex flex-wrap justify-center align-center">
                    <FoodCard
                        img={ImgHotel6}
                        position="Restaurante"
                        name="SABIA QUE VENIAS"
                        url="https://www.sabiaquevenias.com.ar/"
                    />
                    <FoodCard
                        img={ImgHotel7}
                        position="Restaurante"
                        name="CASA LATINA"
                        url="https://casa-latina.ola.click/?fbclid=IwAR1NVefvMMX9EQ32GvPSlKXsJki0ZHKVWVFJFnZW8WtgL6tAtwWYwhbuU2I"
                    />
                  </div>
                 </div>                   
                </div>
            </div>
        </section>
    );
}