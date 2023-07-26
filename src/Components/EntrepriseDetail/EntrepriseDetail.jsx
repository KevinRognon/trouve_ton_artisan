

export default function EntrepriseDetail ( props ) {


    return (
        <div>
            <h1>Nom => {props.entreprise_nom}</h1>
            <h2>Métier => {props.specialite}</h2>
            <p>Localisation => {props.localisation}</p>
            <p>Note => {props.note}</p>
        </div>
    )
}