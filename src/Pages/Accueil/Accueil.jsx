
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
            <section className="d-flex flex-column justify-content-center align-items-center text-center mt-4 pb-5">
                <h1 className="mb-5 col-12 p-2">Comment trouver mon artisan ?</h1>

                <div className="d-flex flex-column flex-md-row justify-content-md-center align-items-stretch gap-3 gap-lg-0 gap-xl-4 col-md-10 col-lg-9 col-xl-4">
                    <Etape number="1" indication="Choisir une catégorie d'artisanat dans le menu."/>

                    <Etape number="2" indication="Choisir un artisan."/>

                    <Etape number="3" indication="Le contacter via le formulaire."/>

                    <Etape number="4" indication="Une réponse sera apportée sous 48h."/>
                </div>
            </section>
            <section className="section-entreprises pt-4 pb-4 d-flex flex-column align-items-center">
                <h1 className="text-light text-center p-3">Entreprises du mois</h1>
                <article className="d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start gap-2 pb-md-5 col-12 col-md-11">
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
