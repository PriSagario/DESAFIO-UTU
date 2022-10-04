import UbicacionesCard from './UbicacionesCard';
import { Box } from '@mui/system';

export default function Ubicaciones() {
    return (
        <section>
            <div className=" relative block bg-gray-200" id='Ubicaciones'>
                <h1 className='font-ALTI text-center margin-fotos' id='Ubicaciones'> UBICACIONES IMPORTANTES </h1>
               <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                <UbicacionesCard
                position="UBICACIÓN"
                name="EPICENTRO"
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.9404579269394!2d-64.522572!3d-30.860342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d8df9b8af4bdf%3A0xb128301db2ea258b!2sPredio%20Recreativo%20Gabriel%20E.%20Suarez!5e0!3m2!1ses-419!2sar!4v1664890660180!5m2!1ses-419!2sar" />
               
               <UbicacionesCard
               position="UBICACIÓN"
                name="ACREDITACIÓN"
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.8721856887846!2d-64.5222292!3d-30.862253300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d824e269ae777%3A0xeee3db348f5343cf!2sHotel%20Montecassino!5e0!3m2!1ses-419!2sar!4v1664890865355!5m2!1ses-419!2sar"/>
               </Box>
               
            </div>
        </section>
    );
}
