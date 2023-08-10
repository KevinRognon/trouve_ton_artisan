import {useEffect} from "react";


export default function Mentions() {

    useEffect(() => {
        document.title = "Mentions légales";
    })

    return (
        <div>
            <h1>Mentions l�gales</h1>
        </div>
        )
}