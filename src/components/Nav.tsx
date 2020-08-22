import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// 防止被tree shaking，使用require引入svg
require('icon/bill.svg');
require('icon/label.svg');
require('icon/me.svg');
require('icon/statistics.svg');
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
      
      .icon {
          width: 1.6em; height: 1.6em;
          vertical-align: -0.15em;
          fill: currentColor;
          overflow: hidden;
      }
`;

function Nav() {
    return (
        <NavWrapper>
            <Link className="nav-item selected" to="/labels" replace>
                <svg className={ 'icon' } aria-hidden={ true }>
                    <use xlinkHref={ '#label' } />
                </svg>
                标签
            </Link>
            <Link className="nav-item" to="/bill" replace>
                <svg className={ 'icon' } aria-hidden={ true }>
                    <use xlinkHref={ '#bill' } />
                </svg>
                账单
            </Link>
            <Link className="nav-item" to="/money" replace>
                <svg className={ 'icon' } aria-hidden={ true }>
                    <use xlinkHref={ '#money' } />
                </svg>
                记账
            </Link>
            <Link className="nav-item" to="/statistics" replace>
                <svg className={ 'icon' } aria-hidden={ true }>
                    <use xlinkHref={ '#statistics' } />
                </svg>
                统计
            </Link>
            <Link className="nav-item" to="/me" replace>
                <svg className={ 'icon' } aria-hidden={ true }>
                    <use xlinkHref={ '#me' } />
                </svg>
                我的
            </Link>
        </NavWrapper>
    );
}

export default Nav;