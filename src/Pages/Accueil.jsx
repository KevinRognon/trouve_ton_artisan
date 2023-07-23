import Etape from "../Components/Etape/Etape";
import data from '../assets/Data/datas.json';
import EntrepriseCard from "../Components/EntrepriseCard/EntrepriseCard";

export default function () {


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
            <section>
                <h1>Entreprises du mois</h1>
                <article>
                    {data.map((item) =>
                        <EntrepriseCard />
                    )}

                </article>
            </section>
        </>
    )
}