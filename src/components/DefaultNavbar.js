import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarToggler from '@material-tailwind/react/NavbarToggler';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Nav from '@material-tailwind/react/Nav';
import NavLink from '@material-tailwind/react/NavLink';
import Button from '@material-tailwind/react/Button';

export default function DefaultNavbar() {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <Navbar color="transparent" className="relative z-50 h-100" >
            <NavbarContainer >
                <NavbarWrapper>
                <img
                  width={120}
                  height={25}
                  alt="DesafioUTU Logo"
                  src="./assets/img/Re__Logo_cerro.png"
                 />
                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        color="white"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar} style={{width:'100%'}}>
                    <Nav >
                        <div className="flex flex-col z-50 lg:flex-row lg:items-center absoluteMenu">
                            <NavLink
                                ripple="light"
                                onClick={() => setOpenNavbar(!openNavbar)}
                            >
                                &nbsp;Sobre la carrera
                            </NavLink>
                            <NavLink
                                href="#Altimetrias"
                                ripple="light"
                                onClick={() => setOpenNavbar(!openNavbar)}
                            >
                                &nbsp;Distancias
                            </NavLink>
                            <a
                                href="https://tyr.com.ar/utu2022insc/inscriptionsshort?layout=formonline"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Button
                                    id="inscriptionsButton"
                                    color="transparent"
                                    className="bg-white text-black ml-6"
                                    ripple="dark"
                                    onClick={() => setOpenNavbar(!openNavbar)}
                                >
                                    INSCRIPCIONES
                                </Button>
                            </a>
                        </div>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}
