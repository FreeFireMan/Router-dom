import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Characters from "./Components/characters/Characters";
import Character from "./Components/character/Character";
import Details from "./Components/details/Details";
import Inventory from "./Components/Inventory/Inventory";
import DetailsInventoryDetail from "./Components/detailsInventoryDetail/DetailsInventoryDetail";

function App() {
    return <div>
        <Router>
            <div><Link to={'Character'}>Character</Link></div>

            <div><Link to={'Inventory'}>Inventory</Link></div>

            <Route exact={true} path={'/Character'} render={(props) => {
                let {match:{url}} = props;
              return  <Characters BaseUrl={url} />
            }
            }/>
            <Route  path={'/Inventory'} render={(props) => {
                let {match:{url}} = props;
               return <Inventory url={url}/>;
            }
            }/>
            <Route exact={true} path={'/Character/:id'} render={(props)=>{
                   let{match:{params:{id}}}=props
                  console.log(props);
                   return <Details detailsUrl={id} />
            }}/>



        </Router>
    </div>
}

export default App;
