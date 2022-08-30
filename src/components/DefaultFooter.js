import H5 from '@material-tailwind/react/Heading5';
import LeadText from '@material-tailwind/react/LeadText';
import Icon from '@material-tailwind/react/Icon';

export default function DefaultFooter() {
    return (
        <footer className='bg-white h-32 flex justify-between items-center px-52'>
                            <div id="icons" className="flex gap-2 md:justify-start md:mb-0 mb-8">
                                <a
                                    href="https://www.facebook.com/ultratrailutu/"
                                    className=" grid place-items-center bg-white text-blue-600 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-facebook-square"
                                    />
                                </a>
                                <a
                                    href="https://wa.me/+5493548638741"
                                    className="grid place-items-center bg-white text-blue-400 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-whatsapp"
                                    />
                                </a>
                                <a
                                    href="https://www.instagram.com/desafioutu/"
                                    className="grid place-items-center bg-white text-indigo-500 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-instagram"
                                    />
                                </a>
                           
                     </div>
            <div>
            <div >
                                <h1 color="gray" className="font-italic">Almawan phaway</h1>
                            </div>
            </div>
        </footer>
    );
}
