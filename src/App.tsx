import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from 'react-router-dom';
import styled from 'styled-components';
import 'css/index.scss';

const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100vh;
`;

const Nav = styled.nav`
      display: flex;
      justify-content: space-between;
      > .nav-item {
          flex: 1;
          text-align: center;
          padding: 20px 0;
      }
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
                <Nav>
                    <Link className="nav-item" to="/labels">标签</Link>
                    <Link className="nav-item" to="/bill">账单</Link>
                    <Link className="nav-item" to="/money">记账</Link>
                    <Link className="nav-item" to="/statistics">统计</Link>
                    <Link className="nav-item" to="/me">我的</Link>
                </Nav>
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
