import {Link, Route} from "react-router-dom";

export default function DetailInventory({name, born,url,id}) {
console.log(id);
    return (
        <div>
            <div>
                {name}
            </div>
            <div>
                {born}
            </div>
            <Link to={url+'/'+ id}>
                Details
            </Link>
            <hr/>
        </div>
    );
}