
import { ReactComponent as MapPosition} from "./assets/map-position.svg";
import { ReactComponent as Note} from "./assets/note.svg";

import './EntrepriseDetail.scss';
export default function EntrepriseDetail ( props ) {


    return (
        <div>
            <div>
                <MapPosition fill="crimson" />
                {props.localisation}
            </div>
            <div>
                <h1>{props.specialite}</h1>
                <div className="d-flex justify-content-center align-items-center">
                    <img src={props.icone} alt={props.entreprise_nom}/>
                    <h2 className="fs-6">{props.entreprise_nom}</h2>
                    <div className="d-flex">
                        <p>{props.note}</p>
                        <Note fill="#FFD600" />
                    </div>
                </div>
            </div>
        </div>
    )
}