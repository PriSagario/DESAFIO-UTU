import H2 from '@material-tailwind/react/Heading2';
import LeadText from '@material-tailwind/react/LeadText';
import TituloUTU from '../../assets/img/logoBlancoUTU.png';

export default function Header() {
    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
            <div className="bg-initial-page bg-cover bg-center absolute top-0 w-full h-full" />
            <div className="container max-w-8xl relative mx-auto">
                <div className="items-center">
                    <div className="w-full lg:w-5/12 px-4 ml-auto mr-auto text-center">
                    <img
                    alt="DesafioUTU"
                    src={TituloUTU}
                 />
                    </div>
                </div>
            </div>
        </div>
    );
}
