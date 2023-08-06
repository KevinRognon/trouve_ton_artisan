import {useEffect} from "react";


export default function Cookies () {

    useEffect(() => {
        document.title = "Cookies";
    })

    return (
        <div>
            <h1>Cookies</h1>
        </div>
    )
}