import {useEffect, useState} from "react";
import {getAllCharacter} from "../Service/Service.character";

export default function DetailsInventoryDetail({params}) {
    let [inventory, setInventory] = useState([])

    useEffect(() => {
        getAllCharacter().then(value => {
            for (const item of value.data) {

                if (item.id === +params) {
                    setInventory(item)
                }
            }

        })
    }, [params]);


    return (
        <div>
            <h1>{inventory.name && inventory.name}</h1>
        </div>
    );
}