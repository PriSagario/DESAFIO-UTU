import Card from '@material-tailwind/react/Card';
import Image from '@material-tailwind/react/Image';
import H6 from '@material-tailwind/react/Heading6';
import Paragraph from '@material-tailwind/react/Paragraph';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';

export default function LandingTeamCard({ img, name, position }) {
    return (
        <Card className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-16">
            <div className="px-16">
                <Image src={img} alt={name} raised />
                <div className="pt-6 text-center">
                    <H6 color="white">{name}</H6>
                    <Paragraph color="white">{position}</Paragraph>
                </div>
            </div>
        </Card>
    );
}
