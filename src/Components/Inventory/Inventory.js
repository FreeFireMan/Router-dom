import {getAllCharacter} from "../Service/Service.character";
import {useEffect, useState} from "react";
import DetailInventory from "../detailnventory/DetailInventory";
import {Route} from "react-router-dom";
import DetailsInventoryDetail from "../detailsInventoryDetail/DetailsInventoryDetail";

export default function Inventory({url}) {
    let [inventory, setInventory] = useState([])

    useEffect(() => {
        getAllCharacter().then(value => setInventory(value.data))
    }, []);


    return (
        <div>
            <div>
                <Route path={"/Inventory/:id"} render={(props) => {
                    let {match:{params:{id}}} = props
                    console.log(id);
                    return <DetailsInventoryDetail params={id}/>
                }}/>
            </div>
            <div>
                {
                    inventory.map((value) => <DetailInventory key={value.id} name={value.name} born={value.born}
                                                              url={url} id={value.id}/>)
                }
            </div>
        </div>
    );
}