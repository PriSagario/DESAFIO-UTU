import Title from 'components/landing/Title';
import Galeria from 'components/landing/Gallery';

export default function ContactSection() {
    return (
        <section className="pb-20 relative block bg-gray-100">
            <div className="container max-w-7xl mx-auto px-4 lg:pt-4" id="Fotos">
                <Title heading="Galería de fotos"/> 
            </div>
            <Galeria/>
        </section>
    );
}
