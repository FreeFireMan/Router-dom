import {Link} from "react-router-dom";

export default function Character({name, born, BaseUrl, id}) {
    return (
        <div>
            <h2>{name}</h2>
            <div>{born}</div>
            <Link to={BaseUrl + '/' + id}>details</Link>
        </div>
    );
}

