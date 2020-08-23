import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route, Redirect, } from 'react-router-dom';
import 'css/index.scss';
import Statistics from 'views/Statistics';
import Money from 'views/Money';
import Bill from 'views/Bill';
import Me from 'views/Me';
import NoMatch from 'views/NoMatch';
import Labels from 'views/Labels';

function App() {
    useEffect( () => {
        const vh = window.innerHeight;
        document.documentElement.style.setProperty('--vh', `${vh}px`)
        window.addEventListener('resize', () => {
            const vh = window.innerHeight;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });
    },[])
    return (
        <Router>
            <Switch>
                <Route path="/labels">
                    <Labels />
                </Route>
                <Route path="/bill">
                    <Bill />
                </Route>
                <Route path="/money">
                    <Money />
                </Route>
                <Route path="/statistics">
                    <Statistics />
                </Route>
                <Route path="/me">
                    <Me />
                </Route>
                {/* 默认路由 */}
                <Route exact path="/">
                    <Redirect to="/money" />
                </Route>
                {/* 404 */}
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
