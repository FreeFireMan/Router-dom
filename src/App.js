import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Characters from "./Components/characters/Characters";
import Character from "./Components/character/Character";
import Details from "./Components/details/Details";
import Inventory from "./Components/Inventory/Inventory";


function App() {
    return (
        <div>
            <Router>
                <div><Link to={'Character'}>Character</Link></div>
                <div><Link to={'Inventory'}>Inventory</Link></div>

                <Switch>
                    <Route exact={true} path={'/Character'} render={({match: {url}}) => <Characters BaseUrl={url}/>}/>
                    <Route path={'/Inventory'} render={({match: {url}}) => <Inventory url={url}/>}/>
                    <Route exact={true} path={'/Character/:id'} render={({match: {params: {id}}}) => <Details detailsUrl={id}/>}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
