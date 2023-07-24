import { ReactComponent as Loupe } from "./assets/loupe.svg";

import data from '../../assets/Data/datas.json';

import './Batiment.scss';
import EntrepriseCard from "../../Components/EntrepriseCard/EntrepriseCard";

export default function Batiment () {

    return (
        <section className="d-flex flex-column align-items-center">
            <article className="champ_recherche d-flex flex-row justify-content-center align-items-center card col-8 rounded-4 p-1 gap-1 mb-4 mt-3">
                <Loupe />
                <input type="text" placeholder="Recherchez un artisan"/>
            </article>

            <article className="article-batiment w-100 d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex flex-column justify-content-center align-items-center col-12 gap-2 p-2 mt-2 mb-2">
                    {
                        data.map((item) =>
                            <EntrepriseCard entreprise_nom={item.name} specialite={item.specialty} localisation={item.location} note={item.note} />
                        )
                    }
                </div>
            </article>
        </section>
    )
}