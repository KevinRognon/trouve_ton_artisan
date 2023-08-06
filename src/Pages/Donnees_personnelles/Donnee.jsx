import {useEffect} from "react";


export default function Donnee() {

    useEffect(() => {
        document.title = "Données personnelles";
    })

    return (
        <div>
            <h1>Donn�e personnelles</h1>
        </div>
        )
}