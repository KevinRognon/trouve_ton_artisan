import loupe from './Assets/loupe.svg';
import barre_menu from './Assets/barre_menu.svg';
import './header.scss';
import {useRef, useState} from "react";

export default function Header () {


    return (
        <header className="col-12 h-2">
            <nav className="h-100 d-flex justify-content-between">

                <div className="logo_site"></div>

                <ul className="h-100 d-flex flex-row align-items-center gap-2 me-3">

                    <div className="container_search_bar">
                        <img className="loupe" src={loupe} alt="loupe"/>
                    </div>
                    <li className="menu-hamburger d-flex flex-column align-items-center gap-1">
                            <img src={barre_menu} alt="Barre menu hamburger"/>
                            <img src={barre_menu} alt="Barre menu hamburger"/>
                            <ul className="deroulant_menu d-flex flex-column gap-3">
                                <li>Accueil</li>
                                <li>Bâtiment</li>
                                <li>Services</li>
                                <li>Fabrication</li>
                                <li>Alimentation</li>

                            </ul>
                    </li>

                </ul>
            </nav>
        </header>
    )
}