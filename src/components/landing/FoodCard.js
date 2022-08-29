import Card from '@material-tailwind/react/Card';

const colors = {
    red: 'bg-red-500',
    logo1: 'bg-color2-utu',
    logo2: 'bg-color2-utu',
};


export default function FoodCard({ img, name, position, url }) {
    return (
        <a href={url} target="_blank">
        <Card className="flex flex-col bg-color2-utu w-36 h-40 mx-5 my-4 customCards">
            <img className='mb-5 w-36 h-32 rounded' src={img} />
            <div>
                <h3 className='text-center color-text-white font-bold'>{name}</h3>
                <h6 className='text-center color-text-white'>{position}</h6>
            </div>
        </Card>
        </a>
    );
}