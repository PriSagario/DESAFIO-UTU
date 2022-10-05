import Galeria from 'components/landing/Gallery';

export default function GallerySection() {
    return (
        <div className="pb-20 relative block bg-white" id='Fotos'>
           <h1 className='font-titles text-center margin-fotos'>GALERÍA DE FOTOS</h1>
            <Galeria/>
        </div>
    );
}
