import {Switch, Route} from "react-router-dom"
import FruitsPage from "../Pages/FruitsPage";

function Routes(){
    return(
        <Switch>
            <Route exact path="/">
                <FruitsPage></FruitsPage>
            </Route>
        </Switch>
    )
}

export default Routes;