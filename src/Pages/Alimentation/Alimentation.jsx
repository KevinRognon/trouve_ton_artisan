import { ReactComponent as Loupe } from "./assets/loupe.svg";

import data from '../../assets/Data/datas.json';

import './Alimentation.scss';
import EntrepriseCard from "../../Components/EntrepriseCard/EntrepriseCard";
import {useState} from "react";

export default function Alimentation () {

    const [inputResearch, setInputResearch] = useState("");

    const handleInputChange = (e) => {
        let valeur = e.target.value;
        valeur.length > 2 && setInputResearch(valeur);
        valeur.length === 0 && setInputResearch("");
    }

    return (
        <section className="d-flex flex-column align-items-center">
            <article className="champ_recherche d-flex flex-row justify-content-center align-items-center card col-8 rounded-4 p-1 gap-1 mb-4 mt-3">
                <Loupe />
                <input onChange={handleInputChange} type="text" placeholder="Recherchez un artisan"/>
            </article>

            <article className="article-batiment w-100 d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex flex-column justify-content-center align-items-center col-12 gap-2 p-2 mt-2 mb-2">
                    <h1 className="text-light">Entreprises d'Alimentation</h1>
                    {
                        data.filter((val) => {
                            return val.specialty.toLowerCase().includes(inputResearch.toLowerCase()) || val.location.toLowerCase().includes(inputResearch.toLowerCase()) || val.name.toLowerCase().includes(inputResearch.toLowerCase());
                        }).map((val, key) => {
                                if (val.category === "Alimentation") {
                                    return <EntrepriseCard id={val.id} key={val.id} icone_specialite={val.icone} entreprise_nom={val.name} specialite={val.specialty} localisation={val.location} note={val.note} />
                                }
                                return null;
                            }
                        )
                    }
                </div>
            </article>
        </section>
    )
}