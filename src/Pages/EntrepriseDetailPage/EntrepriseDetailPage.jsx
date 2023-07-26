import {useParams} from "react-router-dom";
import data from '../../assets/Data/datas.json';
import EntrepriseDetail from "../../Components/EntrepriseDetail/EntrepriseDetail";


export default function EntrepriseDetailPage () {


    const params = useParams();

    console.log(params);

    // <EntrepriseCard
    //     id={entreprise.id}
    //     key={entreprise.id}
    //     icone_specialite={entreprise.icone}
    //     entreprise_nom={entreprise.name}
    //     specialite={entreprise.specialty}
    //     localisation={entreprise.location}
    //     note={entreprise.note}
    // />

    return (
        <section>
            <article>
                {
                    data.map((entreprise, key) => {
                        if(params.name === entreprise.name) {
                            return <EntrepriseDetail
                                key={entreprise.id}
                                entreprise_nom={entreprise.name}
                                specialite={entreprise.specialty}
                                localisation={entreprise.location}
                                note={entreprise.note}
                            />
                        }
                    })
                }
            </article>
        </section>
    )
}