import {useEffect} from "react";


export default function Accessibilite () {

    useEffect(() => {
        document.title = "Accessibilité";
    })

    return (
        <div>
            <h1>Accessiblité</h1>
        </div>
    )
}