
import data from '../../assets/Data/datas.json';

import Etape from "../../Components/Etape/Etape";
import EntrepriseCard from "../../Components/EntrepriseCard/EntrepriseCard";
import {useEffect, useState} from "react";

import plombier from "./assets/plombier.png";
import couture from "./assets/couture.png";
import coiffure from "./assets/coiffure.png";
import bijoutier from "./assets/bijou.png";
import menuisier from "./assets/marteau.png";
import macon from "./assets/marteau.png";
import chocolatier from './assets/chocolatier.png';
import toiletteur from './assets/toiletteur.png';
import webdesigner from './assets/webdesigner.png';
import chauffagiste from './assets/chauffagiste.png';
import boulanger from './assets/boulanger.png';
import boucher from './assets/boucher.png';
import electricien from './assets/electricien.png';
import traiteur from './assets/traiteur.png';
import fleuriste from './assets/fleuriste.png';
import carrossier from './assets/carrossier.png';
import ferronier from './assets/ferronier.png';

import './Accueil.scss';

export default function () {



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
                                        return <EntrepriseCard key={item.id} icone_specialite={plombier}
                                                               entreprise_nom={item.name} specialite={item.specialty}
                                                               localisation={item.location} note={item.note}/>
                                    case "Coiffeur":
                                        return <EntrepriseCard key={item.id} icone_specialite={coiffure}
                                                               entreprise_nom={item.name} specialite={item.specialty}
                                                               localisation={item.location} note={item.note}/>
                                    case "Couturier":
                                        return <EntrepriseCard key={item.id} icone_specialite={couture}
                                                               entreprise_nom={item.name} specialite={item.specialty}
                                                               localisation={item.location} note={item.note}/>
                                    case "Bijoutier":
                                        return <EntrepriseCard key={item.id} icone_specialite={bijoutier}
                                                               entreprise_nom={item.name} specialite={item.specialty}
                                                               localisation={item.location} note={item.note}/>
                                    case "Menuisier":
                                        return <EntrepriseCard key={item.id} icone_specialite={menuisier}
                                                               entreprise_nom={item.name} specialite={item.specialty}
                                                               localisation={item.location} note={item.note}/>
                                    case "Chocolatier":
                                        return <EntrepriseCard key={item.id} icone_specialite={chocolatier} entreprise_nom={item.name} specialite={item.specialty} localisation={item.location} note={item.note} />
                                    case "Toiletteur":
                                        return <EntrepriseCard key={item.id} icone_specialite={toiletteur} entreprise_nom={item.name} specialite={item.specialty} localisation={item.location} note={item.note} />
                                    case "Webdesign":
                                        return <EntrepriseCard key={item.id} icone_specialite={webdesigner} entreprise_nom={item.name} specialite={item.specialty} localisation={item.location} note={item.note} />
                                    case "Chauffagiste":
                                        return <EntrepriseCard key={item.id} icone_specialite={chauffagiste} entreprise_nom={item.name} specialite={item.specialty} localisation={item.location} note={item.note} />
                                    case "Boulanger":
                                        return <EntrepriseCard key={item.id} icone_specialite={boulanger} entreprise_nom={item.name} specialite={item.specialty} localisation={item.location} note={item.note} />
                                    case "Boucher":
                                        return <EntrepriseCard key={item.id} icone_specialite={boucher} entreprise_nom={item.name} specialite={item.specialty} localisation={item.location} note={item.note} />
                                    case "Electricien":
                                        return <EntrepriseCard key={item.id} icone_specialite={electricien} entreprise_nom={item.name} specialite={item.specialty} localisation={item.location} note={item.note} />
                                    case "Traiteur":
                                        return <EntrepriseCard key={item.id} icone_specialite={traiteur} entreprise_nom={item.name} specialite={item.specialty} localisation={item.location} note={item.note} />
                                    case "Fleuriste":
                                        return <EntrepriseCard key={item.id} icone_specialite={fleuriste} entreprise_nom={item.name} specialite={item.specialty} localisation={item.location} note={item.note} />
                                    case "Carrossier":
                                        return <EntrepriseCard key={item.id} icone_specialite={carrossier} entreprise_nom={item.name} specialite={item.specialty} localisation={item.location} note={item.note} />
                                    case "Ferronier":
                                        return <EntrepriseCard key={item.id} icone_specialite={ferronier} entreprise_nom={item.name} specialite={item.specialty} localisation={item.location} note={item.note} />

                                    default:
                                        return null
                                }
                            }
                             )

                    }
                </article>
            </section>
        </>
    )
}