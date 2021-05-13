import {useEffect, useState} from "react";
import {getAllCharacter} from "../Service/Service.character";

export default function Details({detailsUrl, params}) {

    let [characters, setCharacters] = useState([]);

    useEffect(() => {
        getAllCharacter().then(value => setCharacters([...value.data]));
    }, []);

    return (
        <div>
            {characters.map(el => {
                if (el.id === +detailsUrl) {
                    return JSON.stringify(el);
                }
            })}
        </div>
    )
}
