import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <Header></Header>
            <Hero></Hero>
                 <Switch>
                    {/* <Route exact path="/"></Route> */}
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;