import loupe from './Assets/loupe.svg';
import barre_menu from './Assets/barre_menu.svg';
import './header.scss';
import {useState} from "react";
import {gsap} from "gsap";
import HeaderModal from "./Header-Modal";
import {Link, NavLink, Outlet} from "react-router-dom";
import Footer from "../Footer/Footer";


export default function Header () {

    const [toggledMenu, setToggledMenu] = useState(false);
    const [toggledModal, setToggledModal] = useState(false);


    function toggleMenu () {
        setToggledMenu(!toggledMenu);
        setToggledModal(false);
        if (!toggledMenu) {
            gsap.to(".deroulant_menu",
                {
                    right: "0",
                    duration: .4,
                    delay: 0.1
                }
            )
            gsap.to(".links",
                {
                    right: "0",
                    duration: .4,
                    delay: .3,
                    stagger: 0.03
                }
            )
            gsap.to(".barre_haute",
                {
                    rotation: 45,
                    y: 5,
                    ease: "elastic",
                    duration: 1
                }
            )
            gsap.to(".barre_basse",
                {
                    rotation: -45,
                    y: -5,
                    ease: "elastic",
                    duration: 1
                }
            )
        }
        else {
            gsap.to(".deroulant_menu",
                {
                    right: "-110%",
                    delay: .4
                }
            )
            gsap.to(".links",
                {
                    right: "-110%",
                    stagger: 0.06
                }
            )
            gsap.to(".barre_haute",
                {
                    rotation: 0,
                    y: 0,
                    ease: "elastic",
                    duration: 1
                }
            )
            gsap.to(".barre_basse",
                {
                    rotation: 0,
                    y: 0,
                    ease: "elastic",
                    duration: 1
                }
            )
        }

    }

    function setModal() {
        setToggledModal(!toggledModal);
    }



    return (
        <>
            <header className="col-12 h-2">
                <nav className="h-100 d-flex justify-content-between">

                    <Link to="/" className="logo_site"></Link>

                    <ul className="h-100 d-flex flex-row align-items-center gap-2 me-3">

                        <div onClick={setModal} className="container_search_bar" >
                            <img className="loupe" src={loupe} alt="loupe"/>
                        </div>
                        <li className="menu-hamburger d-flex flex-column align-items-center gap-1">
                            <div onClick={toggleMenu} className="barres_menu">
                                <img className="barre_haute" src={barre_menu} alt="Barre menu hamburger"/>
                                <img className="barre_basse" src={barre_menu} alt="Barre menu hamburger"/>
                            </div>
                            <ul className="deroulant_menu d-flex flex-column justify-content-center align-items-center gap-1">
                                <li onClick={toggleMenu} className="links"><NavLink to="/">Accueil</NavLink></li>
                                <li onClick={toggleMenu} className="links"><NavLink to="/batiment">Bâtiment</NavLink></li>
                                <li onClick={toggleMenu} className="links"><NavLink to="/services">Services</NavLink></li>
                                <li onClick={toggleMenu} className="links"><NavLink to="/fabrication">Fabrication</NavLink></li>
                                <li onClick={toggleMenu} className="links"><NavLink to="/alimentation">Alimentation</NavLink></li>

                            </ul>
                        </li>

                    </ul>
                </nav>
            </header>
            <HeaderModal showModal={toggledModal} setModalState={() => {setToggledModal(false)}} />
            <main>
                <Outlet/>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}