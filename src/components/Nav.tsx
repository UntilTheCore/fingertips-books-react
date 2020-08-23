import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';
const NavWrapper = styled.nav`
      display: flex;
      justify-content: space-between;
      line-height: 24px;
      box-shadow:  0 0 3px rgba(0,0,0,.25);
      > .nav-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 16px 0;
          font-size:14px;
          
          &.selected {
            color:red;
          }
      }
`;

function Nav() {
    return (
        <NavWrapper>
            <NavLink activeClassName={"selected"} className="nav-item" to="/labels" replace>
                <Icon name={'label'} />
                标签
            </NavLink>
            <NavLink activeClassName={"selected"} className="nav-item" to="/bill" replace>
                <Icon name={'bill'} />
                账单
            </NavLink>
            <NavLink activeClassName={"selected"} className="nav-item" to="/money" replace>
                <Icon name={'money'} />
                记账
            </NavLink>
            <NavLink activeClassName={"selected"} className="nav-item" to="/statistics" replace>
                <Icon name={'statistics'} />
                统计
            </NavLink>
            <NavLink activeClassName={"selected"} className="nav-item" to="/me" replace>
                <Icon name={'me'} />
                我的
            </NavLink>
        </NavWrapper>
    );
}

export default Nav;