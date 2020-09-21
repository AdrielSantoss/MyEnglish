import {BrowserRouter, Switch, Route} from 'react-router-dom'
import React from 'react'
import Home from '../components/Home'


function Routes(){
    return(
        <BrowserRouter>
               
            <Switch> 
                <Route exact path="/" component={Home}/>        
            </Switch>
           
        </BrowserRouter>
    )
}
export default Routes;