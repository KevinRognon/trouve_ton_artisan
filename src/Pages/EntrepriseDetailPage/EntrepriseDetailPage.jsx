import {useParams} from "react-router-dom";
import data from '../../assets/Data/datas.json';
import EntrepriseDetail from "../../Components/EntrepriseDetail/EntrepriseDetail";


export default function EntrepriseDetailPage () {


    const params = useParams();




    return (
        <section className="section-information d-flex flex-column justify-content-start align-items-center gap-2">
            <article className="article-titre w-100 text-center mb-1">
                <h1>Informations</h1>
            </article>
            <article className="article-information col-11">
                {
                    data.map((entreprise, key) => {
                        if(params.name === entreprise.name) {
                            return <EntrepriseDetail
                                key={entreprise.id}
                                entreprise_nom={entreprise.name}
                                specialite={entreprise.specialty}
                                localisation={entreprise.location}
                                note={entreprise.note}
                                icone={entreprise.icone}
                            />
                        }
                    })
                }
            </article>

            <article className="article-form">
                <form>
                    <h1>Formulaire de contact</h1>
                </form>
            </article>
        </section>
    )
}