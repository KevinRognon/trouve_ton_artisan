import './Etape.scss';

export default function Etape (props) {


    return (
        <div className="d-flex flex-column justify-content-center align-items-center gap-3 col-9">

            <span className="numero_etape bleu_primaire d-flex align-items-center justify-content-center text-light p-3 rounded-5">{props.number}</span>

            <span className="sep"></span>

            <p className="text-center col-12">
                {props.indication}
            </p>
        </div>
    )
}