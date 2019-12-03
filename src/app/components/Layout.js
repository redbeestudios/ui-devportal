import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "../routes";
import Header from './Header';
import Footer from './Footer';
import Jumbotron from './Jumbotron';

import './Layout.scss';

export default () => {
    return (
        <div className='app__content'>
            <Header />
            <Jumbotron />
            <Switch>{ routes.map(route => <Route key={ route.path } { ...route } />)}</Switch>
            {/*<Footer />*/}
        </div>
    );
};
