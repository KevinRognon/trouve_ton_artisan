import { useParams } from "react-router-dom";
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

    function Form() {
        return (
            <div className="d-flex flex-column justify-content-center align-content-center col-12">
                <h1 className="fs-3 text-center">Formulaire de contact</h1>
                <form className="d-flex flex-column justify-content-center align-items-center gap-2">
                    <input className="col-10 p-3 rounded-1" type="text" placeholder="Nom"/>
                    <input className="col-10 p-3 rounded-1" type="text" placeholder="Objet"/>
                    <textarea className="col-10 p-3 rounded-1" placeholder="Message" cols="10"/>

                    <button type="button" className="btn btn-success">Envoyer</button>
                </form>
            </div>
        )
    }

    function ShowWebsite (props) {
        return (
            <div className="d-flex flex-column align-items-center">
                <h2 className="fs-5 text-center">
                    Site web de l'entreprise
                </h2>
                <a className="text-primary text-center" href={props.website}>{props.website}</a>
            </div>
        )
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


            <article className="article-form col-11 p-3 mb-3 d-flex flex-column align-items-center">
                {entreprise.website === "" && <Form />}
                {entreprise.website !== "" && <ShowWebsite website={entreprise.website} />}
            </article>
        </section>
    )
}
