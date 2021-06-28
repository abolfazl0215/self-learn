import React from 'react';
import { Route, Switch } from 'react-router';
import Login from '../Components/Login/Login';
import MainPage from '../Components/MainPage/MainPage';
import Register from '../Components/Register/Register';

const SelfLearn = () => {
    return ( 
        <div>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </div>
     );
}
 
export default SelfLearn;