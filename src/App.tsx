import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import styled from 'styled-components';
import 'css/index.scss';
import Nav from './components/Nav';

const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100vh;
`;

function App() {
    return (
        <Router>
            <Wrapper>
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
                <Nav />
            </Wrapper>
        </Router>
    );
}

function Statistics() {
    return <h2>统计页面</h2>;
}

function Bill() {
    return <h2>账单页面</h2>;
}

function Labels() {
    return <h2>标签页面</h2>;
}

function Money() {
    return <h2>记账页面</h2>;
}

function Me() {
    return <h2>我的页面</h2>;
}

function NoMatch() {
    return <h2>访问地址有误，将返回主页。</h2>;
}

export default App;
