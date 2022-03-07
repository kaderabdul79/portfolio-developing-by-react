import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                 <Switch>
                    {/* <Route exact path="/"></Route> */}
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;