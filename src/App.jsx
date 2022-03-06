import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Hero from './components/hero/Hero';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header></Header>
                <Hero></Hero>
                <About />
                 <Switch>
                    {/* <Route exact path="/"></Route> */}
                </Switch>
            </BrowserRouter>
            
            {/* <Nav />
            <Experience />
            <Portfolio />
            <About />
            <Contact />
            <Footer /> */}
        </div>
    );
};

export default App;