
import { ReactComponent as IconePosition} from "./assets/map-position.svg";
import { ReactComponent as IconeNote} from "./assets/note.svg";

import './EntrepriseCard.scss';

export default function EntrepriseCard (props) {

    return (
        <div className="entreprise-card d-flex flex-column justify-content-center align-items-center gap-1 card p-3 shadow col-11 text-center">
            <img src={props.icone_specialite} alt="icône de specialité"/>
            <h2>{props.entreprise_nom}</h2>
            <p>{props.specialite}</p>
            <div className="d-flex">
                <IconePosition fill="#cd2c2e" />
                <p>{props.localisation}</p>
            </div>
            <p className="d-flex align-items-center">
                {props.note}
                <IconeNote fill="#ffd401" />
            </p>
        </div>
    )
}