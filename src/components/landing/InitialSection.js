import StatusCard from 'components/landing/StatusCard';
import HotelCard from 'components/landing/HotelCard';
import FoodCard from 'components/landing/FoodCard';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import LuggageRoundedIcon from '@mui/icons-material/LuggageRounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import {useEffect} from 'react';
import Aos from "aos";

export default function InitialSection() {

    useEffect(() => {
        Aos.init({
          duration: 1000,
        })
      }, [])

    return (
        <section className="pb-20 bg-gray-200 -mt-32 ancho">
            <div className=" mx-auto">
                <div className="flex align-center justify-center">
                <div className="w-full flex flex-row justify-center relative z-50 ">
                    <StatusCard 
                        color="logo2" 
                        icon={<LuggageRoundedIcon/>} 
                        title="Alojamiento" 
                        url="#Hoteles">
                       <p className="font-bold color-black"> Los mejores hoteles en las sierras.</p>
                    </StatusCard>
                    <StatusCard 
                        color="logo2" 
                        icon={<RestaurantRoundedIcon />} 
                        title="Restaurantes" 
                        url="#Comidas">
                     <p className="font-bold color-black"> Disfruta de la gastronomia de la zona.</p>
                    </StatusCard>
                    <StatusCard
                        color="logo2"
                        icon={<CameraAltRoundedIcon />}
                        title="Fotos"
                        url="#Fotos">
                       <p className="font-bold color-black">Imagenes de nuestras mejores vistas.</p> 
                    </StatusCard>
                </div>
                </div>
                <div className="flex flex-wrap mt-20">
                    <div className="w-full px-4 mx-auto text-center" id='Hoteles' >
                        <h1 className='font-titles text-center'>??D??NDE ALOJARSE?</h1>
                    <div data-aos="fade-down" className="flex flex-wrap justify-center align-center" style={{margin: 'auto'}}>
                     <HotelCard
                        img="./assets/img/laMorada.jpg"
                        position="Hoster??a"
                        name="LA MORADA"
                        url="http://la-morada-hosteria-hostel.allcordobahotels.com/es/"
                    />
                     <HotelCard
                        img="./assets/img/atalaya.jpg"
                        position="Hoster??a"
                        name="LA ATALAYA"
                        url="http://www.laatalaya.com.ar/"
                    />
                     <HotelCard
                        img="./assets/img/adrianita.jpg"
                        position="Hostal"
                        name="ADRIANITA"
                        url="https://hostaladrianita.com.ar/"
                    />
                    <HotelCard
                        img="./assets/img/mousai.jpg"
                        position="Hotel"
                        name="MOUSA??"
                        url="http://www.mousai.com.ar/"
                    />
                    <HotelCard
                        img="./assets/img/montecasino.jpg"
                        position="Hotel"
                        name="MONTECASINO"
                        url="http://www.hotelmontecassino.com.ar/?gclid=Cj0KCQjwgO2XBhCaARIsANrW2X3xYiJnApCctbWE-6J0bnsu6CcTmpGkw9-IngvkdGkHvbaoi69wQ8caAq0SEALw_wcB"
                    />
                    <HotelCard
                        img="./assets/img/namasteCab.jpg"
                        position="Caba??as"
                        name="NAMASTE"
                        url="https://www.instagram.com/cabanas_namaste/?igshid=YmMyMTA2M2Y%3D"
                    />
                    <HotelCard
                        img="./assets/img/lunaSerrana.jpg"
                        position="Hotel"
                        name="LUNA SERRANA"
                        url="https://www.instagram.com/hotellunaserrana/?igshid=YmMyMTA2M2Y%3D"
                    />
                  </div>
                 </div>

                   
                </div>
                <div className="flex flex-wrap mt-6 text-center">
                    <div className="w-full px-4 mx-auto" id='Comidas'>
                    <h1 className='font-titles text-center'>??D??NDE COMER?</h1>
                    <div data-aos="fade-up" className="flex flex-wrap justify-center align-center">
                    <FoodCard
                        img="./assets/img/sabiaQV.jpg"
                        position="Restaurante"
                        name="SABIA QUE VENIAS"
                        url="https://www.sabiaquevenias.com.ar/"
                    />
                    <FoodCard
                        img="./assets/img/casaLatina.jpg"
                        position="Restaurante"
                        name="CASA LATINA"
                        url="https://casa-latina.ola.click/?fbclid=IwAR1NVefvMMX9EQ32GvPSlKXsJki0ZHKVWVFJFnZW8WtgL6tAtwWYwhbuU2I"
                    />
                    <FoodCard
                        img="./assets/img/aguadlPalos.jpg"
                        position="Restaurante"
                        name="AGUA DE LOS PALOS"
                        url="https://aguadelospalos.com.ar/"
                    />
                  </div>
                 </div>                   
                </div>
            </div>
        </section>
    );
}