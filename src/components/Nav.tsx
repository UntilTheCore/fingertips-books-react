import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Icon from "./Icon";

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 3px rgba(0, 0, 0, .25);

  > .nav-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 44px;
    text-align: center;
    font-size: 14px;

    &.selected {
      color: red;
    }
  }
`;

function Nav() {
  return (
    <NavWrapper>
      <Link className="nav-item selected" to="/labels" replace>
        <Icon name="label" />
        标签
      </Link>
      <Link className="nav-item" to="/bill" replace>
        <Icon name="bill" />
        账单
      </Link>
      <Link className="nav-item" to="/money" replace>
        <Icon name="money" />
        记账
      </Link>
      <Link className="nav-item" to="/statistics" replace>
        <Icon name="statistics" />
        统计
      </Link>
    </NavWrapper>
  );
}

export default Nav;
