import { ReactComponent as Loupe } from "./assets/loupe.svg";

import './Batiment.scss';

export default function Batiment () {

    return (
        <section className="d-flex flex-column align-items-center">
            <div className="d-flex flex-row justify-content-center align-items-center card col-8 rounded-4 p-1">
                <Loupe />
                <input type="text" placeholder="Recherchez un artisan"/>
            </div>
        </section>
    )
}