
import './Footer.scss';

import { ReactComponent as Liens } from "./assets/liens.svg";
import { ReactComponent as Adresse } from "./assets/map_position.svg";

export default function Footer () {


    return (
        <>
            <div className="p-3 d-flex flex-column flex-md-row justify-content-center mt-md-5">
                <div className="logo_site"></div>
                <div className="d-flex flex-column flex-md-row justify-content-md-center">
                    <div className="d-flex flex-column justify-content-start align-items-start gap-2 mx-4">
                        <div className="d-flex justify-content-center align-items-center gap-2">
                            <Liens />
                            <h2>Liens</h2>
                        </div>
                        <ul className="liens-footer pl-4">
                            <li>Mentions légales</li>
                            <li>Données personnelles</li>
                            <li>Accessibilité</li>
                            <li>Cookies</li>
                        </ul>
                    </div>

                    <div className="d-flex flex-column justify-content-start align-items-start gap-2 mx-4">
                        <div className="d-flex justify-content-center align-items-center gap-2">
                            <Adresse />
                            <h2>Adresse</h2>
                        </div>
                        <div className="px-4">
                            <address>
                                101 cours Charlemagne CS 20033 69269 LYON CEDEX 02 FRANCE
                            </address>
                            <a href="tel:+33426734000">+33 (0)4 26 73 40 00</a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}