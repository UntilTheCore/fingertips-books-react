import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
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
    height: 50px;
    text-align: center;
    font-size: 14px;

    &.selected {
      color: red;
    }
  }
`;

function Nav() {
  const navList = [
    {
      name: "标签",
      iconName: "label",
      link: "/labels",
    },
    {
      name: "记账",
      iconName: "bill",
      link: "/money",
    },
    {
      name: "统计",
      iconName: "statistics",
      link: "/statistics",
    },
  ];

  return (
    <NavWrapper>
      {
        navList.map((item, index) => {
          return (
            <NavLink
              className="nav-item"
              activeClassName="selected"
              to={ item.link }
              key={ index }
              replace
            >
              <Icon name={ item.iconName } />
              { item.name }
            </NavLink>
          );
        })
      }
    </NavWrapper>
  );
}

export default Nav;
