import loupe from './Assets/loupe.svg';
import barre_menu from './Assets/barre_menu.svg';
import './header.scss';

export default function Header () {


    return (
        <header className="col-12 h-2">
            <nav className="h-100 d-flex justify-content-between">
                <div className="logo_site"></div>
                <ul className="h-100 d-flex flex-row align-items-center gap-2 me-3">
                    <li><img className="logo" src={loupe} alt="Loupe"/></li>
                    <li>
                        <li className="d-flex flex-column align-items-center gap-1">
                            <img src={barre_menu} alt="Barre menu hamburger"/>
                            <img src={barre_menu} alt="Barre menu hamburger"/>
                            <ul className="deroulant_menu">

                            </ul>
                        </li>
                    </li>
                </ul>
            </nav>
        </header>
    )
}