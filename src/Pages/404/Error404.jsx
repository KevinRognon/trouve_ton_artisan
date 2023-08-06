
import error404 from '../../assets/icones/404.png';
import './Error404.scss';
import {NavLink} from "react-router-dom";


export default function Error404 () {

    return (
        <section className="d-flex flex-column flex-md-row justify-content-center align-items-center mt-5">
            <img className="image_404 w-50 mb-4" src={error404} alt="Erreur 404"/>
            <div className="div-introuvable d-flex flex-column align-items-center">
                <h1 className="text-center page-introuvable-title">La page recherchée est introuvable</h1>
                <NavLink to="/" className="btn btn-primary pb-1 pt-1 rounded-4">
                    Retourner à l'accueil
                </NavLink>
            </div>
        </section>
    )
}