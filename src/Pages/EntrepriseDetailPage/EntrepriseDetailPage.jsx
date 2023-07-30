import {Navigate, useParams} from "react-router-dom";
import data from '../../assets/Data/datas.json';
import EntrepriseDetail from "../../Components/EntrepriseDetail/EntrepriseDetail";
import React from "react";
import Error404 from "../404/Error404";


export default function EntrepriseDetailPage () {


    const params = useParams();

    const entreprise = data.find((entreprise) => entreprise.name === params.name);

    if (!entreprise) {
        return <Error404 />
    }


    return (
        <section className="section-information d-flex flex-column justify-content-start align-items-center">
            <article className="article-titre w-100 text-center mb-1">
                <h1>Informations</h1>
            </article>
            <article className="article-information col-11 mt-3">
                {
                    <EntrepriseDetail
                        key={entreprise.id}
                        icone={entreprise.icone}
                        entreprise_nom={entreprise.name}
                        specialite={entreprise.specialty}
                        localisation={entreprise.location}
                        note={entreprise.note}
                        apropos={entreprise.about}
                    />
                }
            </article>

            <article className="article-form col-11 p-3 mb-3">
                <div className="d-flex flex-column justify-content-center align-content-center col-12">
                    <h1 className="fs-3 text-center">Formulaire de contact</h1>
                    <form className="d-flex flex-column justify-content-center align-items-center gap-2">
                        <input className="col-10 p-3 rounded-1" type="text" placeholder="Nom"/>
                        <input className="col-10 p-3 rounded-1" type="text" placeholder="Objet"/>
                        <textarea className="col-10 p-3 rounded-1" placeholder="Message" cols="10"/>

                        <button type="button" className="btn btn-success">Envoyer</button>
                    </form>
                </div>
            </article>
        </section>
    )
}