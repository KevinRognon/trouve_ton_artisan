import Etape from "../../Components/Etape/Etape";
import data from '../../assets/Data/datas.json';
import EntrepriseCard from "../../Components/EntrepriseCard/EntrepriseCard";
import {useEffect, useState} from "react";

import plombier from "./assets/plombier.png";
import couture from "./assets/couture.png";
import coiffure from "./assets/coiffure.png";
import bijoutier from "./assets/bijou.png";
import charpentier from "./assets/marteau.png";
import macon from "./assets/marteau.png";

import './Accueil.scss';

export default function () {



    let tableauEntreprises = useState([]);
    let [troisEntreprises, setEntreprise]   = useState([]);

    useEffect(() => {
        tableauEntreprises = [];
        const troisEntreprisesTemp   = [];

        data.map((item) => {
            tableauEntreprises.push(item);
        })
        tableauEntreprises.sort((a, b) => b.note - a.note);
        for (let i = 0; i <= 2; i++) {
            troisEntreprisesTemp.push(tableauEntreprises[i]);
        }

        setEntreprise(troisEntreprisesTemp);
    }, [])


    return (
        <>
            <section className="d-flex flex-column justify-content-center text-center mt-4">
                <h1 className="mb-5 col-12 p-4">Comment trouver mon artisan ?</h1>
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
            </section>
            <section className="section-entreprises pt-4 pb-4">
                <h1 className="text-light text-center">Entreprises du mois</h1>
                <article className="d-flex flex-column justify-content-center align-items-center gap-2">
                    {
                        troisEntreprises.map((item, key) => {
                            switch (item.specialty) {
                                case "Plombier":
                                    return <EntrepriseCard key={item.id} icone_specialite={plombier} entreprise_nom={item.name} specialite={item.specialty} localisation={item.location} note={item.note} />
                                case "Coiffeur":
                                    return <EntrepriseCard key={item.id} icone_specialite={coiffure} entreprise_nom={item.name} specialite={item.specialty} localisation={item.location} note={item.note} />

                            }
                             })

                    }
                </article>
            </section>
        </>
    )
}