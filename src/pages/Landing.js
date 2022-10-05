import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/landing/Header';
import InitialSection from 'components/landing/InitialSection';
import AltiSection from 'components/landing/AltiSection';
import GallerySection from 'components/landing/GallerySection';
import Ubicaciones from 'components/landing/Ubicaciones';

export default function Landing() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main className="w-100">
                <Header />
                <InitialSection />
                <AltiSection />
                <Ubicaciones />
                <GallerySection />
            </main>
            <DefaultFooter />
        </>
    );
}
