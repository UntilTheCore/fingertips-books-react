import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/labels">标签</Link>
                        </li>
                        <li>
                            <Link to="/bill">账单</Link>
                        </li>
                        <li>
                            <Link to="/money">记账</Link>
                        </li>
                        <li>
                            <Link to="/statistics">统计</Link>
                        </li>
                        <li>
                            <Link to="/me">我的</Link>
                        </li>
                    </ul>
                </nav>
                
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
            </div>
        </Router>
    );
}

function Statistics() {
    return <h2>统计页面</h2>;
}

function Bill() {
    return <h2>账单页面</h2>
}

function Labels() {
    return <h2>标签页面</h2>;
}

function Money() {
    return <h2>记账页面</h2>;
}

function Me() {
    return <h2>我的页面</h2>
}

function NoMatch() {
    return <h2>访问地址有误，将返回主页。</h2>
}

export default App;
