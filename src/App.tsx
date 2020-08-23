import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import 'css/index.scss';
import Layout from './components/Layout';

function App() {
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
                <Route exact path="/">
                    <Redirect to="/money" />
                </Route>
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
        </Router>
    );
}

function Statistics() {
    return (
        <Layout>
            <h2>统计页面</h2>
        </Layout>
    );
}

function Bill() {
    return (
        <Layout>
            <h2>账单页面</h2>
        </Layout>
    );
}

function Labels() {
    return (
        <Layout>
            <h2>标签页面</h2>
        </Layout>
    );
}

function Money() {
    return (
        <Layout>
            <h2>记账页面</h2>
        </Layout>
    );
}

function Me() {
    return (
        <Layout>
            <h2>我的页面</h2>
        </Layout>
    );
}

function NoMatch() {
    return <h2>访问地址有误，将返回主页。</h2>;
}

export default App;
