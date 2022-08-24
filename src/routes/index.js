import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "../pages/Home";
import Error from "../pages/Error";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AppRoute() {
     return (
        <BrowserRouter>
            <Header />
            <div id="content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="*" component={Error} />                    
                </Switch>
            </div>
            <Footer negative={false}/>
        </BrowserRouter>
    );
}

export default AppRoute;
