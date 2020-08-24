import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(var(--vh, 1vh));
    > main {
        flex-grow: 1;
        overflow: auto;
        // 使 iOS 端滑动顺畅
        -webkit-overflow-scrolling: touch;
        // 隐藏滚动条
        &::-webkit-scrollbar {
            height: 0 !important;
            width: 0 !important;
        }
    }
`;

const Layout = (props: any) => {
    return (
        <Wrapper>
            <header>{ props.children[0] }</header>
            <main> { props.children[1] } </main>
            <footer><Nav /></footer>
        </Wrapper>
    );
};

export default Layout;