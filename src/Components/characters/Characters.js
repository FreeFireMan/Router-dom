import {useEffect, useState} from "react";
import {getAllCharacter} from "../Service/Service.character";
import Character from "../character/Character";

export default function Characters({BaseUrl}) {

    let [characters, setCharacters] = useState([]);

    useEffect(() => {
            getAllCharacter().then(value => setCharacters([...value.data]));
    }, []);

    return (
        <div>
            {
                characters.map(value => <Character name={value.name} born ={value.born} id={value.id} BaseUrl={BaseUrl}/>)
            }
        </div>
    );
}