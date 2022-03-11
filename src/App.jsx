import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home';
import ProjectDetails from './pages/projectDetails/ProjectDetails';
import SkillDetails from './pages/skillDetails/SkillDetails';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/projects/:id">
                        <ProjectDetails></ProjectDetails>
                    </Route>
                    <Route path="/skills/:id">
                        <SkillDetails></SkillDetails>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;