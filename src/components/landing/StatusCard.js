import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import H6 from '@material-tailwind/react/Heading6';
import Paragraph from '@material-tailwind/react/Paragraph';

const colors = {
    blueGray: 'bg-blue-gray-500',
    gray: 'bg-gray-500',
    brown: 'bg-brown-500',
    deepOrange: 'bg-deep-orange-500',
    orange: 'bg-orange-500',
    amber: 'bg-amber-500',
    yellow: 'bg-yellow-600',
    lime: 'bg-lime-500',
    lightGreen: 'bg-light-green-500',
    green: 'bg-green-500',
    teal: 'bg-teal-500',
    cyan: 'bg-cyan-500',
    lightBlue: 'bg-light-blue-500',
    blue: 'bg-blue-500',
    indigo: 'bg-indigo-500',
    deepPurple: 'bg-deep-purple-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
    red: 'bg-red-500',
    logo1: 'bg-color2-utu',
    logo2: 'bg-color4-utu',
};

export default function StatusCard({ color, icon, title, children, url }) {
    return (
        <div className="w-full px-4 flex justify-center text-center mt-3 ">
            <a href={url}>
            <Card className="status-styles">
                <CardBody>
                    <div className='flex flex-col justify-center items-center'>
                    <div
                        className={`p-3 text-center inline-flex items-center justify-center rounded-styles mb-3 shadow-md rounded-full ${colors[color]}`}
                    >
                     {icon}
                    </div>
                    <H6 color="gray" className="status-text">{title}</H6>
                    </div>
                    <div className="block-init">
                    <Paragraph color="blueGray">{children}</Paragraph>
                    </div>
                </CardBody>
            </Card>
            </a>
        </div>
    );
}
