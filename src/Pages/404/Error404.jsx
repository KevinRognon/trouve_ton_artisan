
import error404 from '../../assets/icones/404.png';
import {NavLink} from "react-router-dom";

export default function Error404 () {

    return (
        <section className="d-flex flex-column justify-content-center align-items-center mt-5">
            <img className="w-50 mb-4" src={error404} alt="Erreur 404"/>
            <h1 className="text-center">La page recherchée est introuvable</h1>
            <NavLink to="/" className="btn btn-primary pb-1 pt-1 rounded-4">
                Retourner à l'accueil
            </NavLink>
        </section>
    )
}