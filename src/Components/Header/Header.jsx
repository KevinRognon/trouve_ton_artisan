import loupe from './Assets/loupe.svg';
import barre_menu from './Assets/barre_menu.svg';
import './header.scss';
import {useEffect, useState} from "react";
import {gsap} from "gsap";
import HeaderModal from "./Header-Modal";


export default function Header () {

    const [toggledMenu, setToggledMenu] = useState(false);
    const [toggledModal, setToggledModal] = useState(false);


    function toggleMenu () {
        setToggledMenu(!toggledMenu);
        setToggledModal(false);
        if (!toggledMenu) {
            gsap.to(".links",
                {
                    right: 0,
                    stagger: 0.06
                }
            )
        }
        else {
            gsap.to(".links",
                {
                    right: "-150px",
                    stagger: 0.06
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

                    <div className="logo_site"></div>

                    <ul className="h-100 d-flex flex-row align-items-center gap-2 me-3">

                        <div onClick={setModal} className="container_search_bar" >
                            <img className="loupe" src={loupe} alt="loupe"/>
                        </div>
                        <li className="menu-hamburger d-flex flex-column align-items-center gap-1">
                            <div onClick={toggleMenu} className="barres_menu">
                                <img src={barre_menu} alt="Barre menu hamburger"/>
                                <img src={barre_menu} alt="Barre menu hamburger"/>
                            </div>
                            <ul className="deroulant_menu d-flex flex-column gap-3">
                                <li className="links">Accueil</li>
                                <li className="links">Bâtiment</li>
                                <li className="links">Services</li>
                                <li className="links">Fabrication</li>
                                <li className="links">Alimentation</li>

                            </ul>
                        </li>

                    </ul>
                </nav>
            </header>
            <HeaderModal showModal={toggledModal} setModalState={() => {setToggledModal(false)}} />
        </>
    )
}