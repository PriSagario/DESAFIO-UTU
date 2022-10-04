import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/landing/Header';
import WorkingSection from 'components/landing/WorkingSection';
import TeamSection from 'components/landing/TeamSection';
import ContactSection from 'components/landing/ContactSection';
import Ubicaciones from 'components/landing/Ubicaciones';

export default function Landing() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main className="w-100">
                <Header />
                <WorkingSection />
                <TeamSection />
                <Ubicaciones />
                <ContactSection />
            </main>
            <DefaultFooter />
        </>
    );
}
