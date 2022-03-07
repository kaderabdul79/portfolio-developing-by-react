import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './components/about/About';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <Header></Header>
            <Hero></Hero>
            <About></About>
                 <Switch>
                    {/* <Route exact path="/"></Route> */}
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;