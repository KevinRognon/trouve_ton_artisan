
import data from '../../assets/Data/datas.json';

import Etape from "../../Components/Etape/Etape";
import EntrepriseCard from "../../Components/EntrepriseCard/EntrepriseCard";
import {useEffect, useState} from "react";


import './Accueil.scss';

export default function Accueil () {



    let tableauEntreprises = useState([]);
    let [troisEntreprises, setEntreprises]   = useState([]);

    useEffect(() => {

        tableauEntreprises = [];

        data.map((item) => {
            tableauEntreprises.push(item);
        })

        const tableauEntreprisesTemp = [...tableauEntreprises];

        tableauEntreprisesTemp.sort((a, b) => b.note - a.note);
        const topTroisEntreprises = tableauEntreprisesTemp.slice(0, 3);


        setEntreprises(topTroisEntreprises);



    }, [])


    return (
        <>
            <section className="d-flex flex-column justify-content-center text-center mt-4 pb-5">
                <h1 className="mb-5 col-12 p-2">Comment trouver mon artisan ?</h1>

                <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-center">
                    <div className="d-flex justify-content-center">
                        <Etape number="1" indication="Choisir une catégorie d'artisanat dans le menu."/>
                    </div>

                    <div className="d-flex justify-content-center">
                        <Etape number="2" indication="Choisir un artisan."/>
                    </div>

                    <div className="d-flex justify-content-center">
                        <Etape number="3" indication="Le contacter via le formulaire."/>
                    </div>

                    <div className="d-flex justify-content-center">
                        <Etape number="4" indication="Une réponse sera apportée sous 48h."/>
                    </div>
                </div>
            </section>
            <section className="section-entreprises pt-4 pb-4 d-flex flex-column align-items-center">
                <h1 className="text-light text-center p-3">Entreprises du mois</h1>
                <article className="d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start gap-2 pb-md-5">
                    {
                        troisEntreprises.map((item, key) =>
                            <EntrepriseCard
                                key={item.id}
                                id={item.id}
                                entreprise_nom={item.name}
                                specialite={item.specialty}
                                localisation={item.location}
                                note={item.note}
                            />
                        )

                    }
                </article>
            </section>
        </>
    )
}
