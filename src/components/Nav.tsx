import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavWrapper = styled.nav`
      display: flex;
      justify-content: space-between;
      line-height: 24px;
      box-shadow:  0 0 3px rgba(0,0,0,.25);
      > .nav-item {
          flex: 1;
          text-align: center;
          padding: 16px 0;
      }
`;

function Nav() {
    return (
        <NavWrapper>
            <Link className="nav-item" to="/labels">标签</Link>
            <Link className="nav-item" to="/bill">账单</Link>
            <Link className="nav-item" to="/money">记账</Link>
            <Link className="nav-item" to="/statistics">统计</Link>
            <Link className="nav-item" to="/me">我的</Link>
        </NavWrapper>
    );
}

export default Nav;