import {Helmet} from "react-helmet";


export default function Meta (props) {


    return (

        <Helmet>
            <meta name="description" content={props.content} />
            <title>{props.title}</title>
        </Helmet>

    )
}